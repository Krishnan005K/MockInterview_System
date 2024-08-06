import React, { useState, useRef, useEffect } from 'react';
import 'D:/sem5-project1/Fullstack-project1/frontend/src/Assets/Styles/IntervieweeCss/VideoRec.css';;


function VideoRec() {
    const [recording, setRecording] = useState(false);
    const [videoURL, setVideoURL] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState('');
    const [recordingCompleted, setRecordingCompleted] = useState(false);
    const [transcription, setTranscription] = useState('');
    const [aiFeedback, setAiFeedback] = useState('');
    const videoRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const questionIndex = useRef(0);
    const speechRecognitionRef = useRef(null);
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
    const mockQuestions = [
        "Tell me about yourself.",
        "What are your strengths?",
        "Why do you want this job?",
        // Add more questions as needed
    ];

    useEffect(() => {
        let questionInterval;
        if (recording) {
            setCurrentQuestion(mockQuestions[questionIndex.current]);
            questionInterval = setInterval(() => {
                questionIndex.current = (questionIndex.current + 1) % mockQuestions.length;
                setCurrentQuestion(mockQuestions[questionIndex.current]);
            }, 10000);
        } else {
            setCurrentQuestion('');
            questionIndex.current = 0;
        }
        return () => clearInterval(questionInterval);
    }, [recording]);

    useEffect(() => {
        if ('webkitSpeechRecognition' in window) {
            const SpeechRecognition = window.webkitSpeechRecognition;
            speechRecognitionRef.current = new SpeechRecognition();
            speechRecognitionRef.current.continuous = true;
            speechRecognitionRef.current.interimResults = true;
            speechRecognitionRef.current.lang = 'en-US';

            speechRecognitionRef.current.onresult = (event) => {
                let interimTranscription = '';
                for (let i = event.resultIndex; i < event.results.length; i++) {
                    if (event.results[i].isFinal) {
                        setTranscription(prev => prev + event.results[i][0].transcript + ' ');
                    } else {
                        interimTranscription += event.results[i][0].transcript;
                    }
                }
                setTranscription(prev => prev + interimTranscription);
            };

            speechRecognitionRef.current.onerror = (event) => {
                console.error('Speech recognition error', event);
            };
        } else {
            console.error('Speech Recognition API not supported in this browser.');
        }
    }, []);

    useEffect(() => {
        if (transcription) {
            analyzeTranscript(transcription);
        }
    }, [transcription]);

    const startRecording = () => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
            videoRef.current.srcObject = stream;
            videoRef.current.play();

            mediaRecorderRef.current = new MediaRecorder(stream);
            mediaRecorderRef.current.ondataavailable = (event) => {
                const blob = new Blob([event.data], { type: 'video/webm' });
                setVideoURL(URL.createObjectURL(blob));
            };
            mediaRecorderRef.current.start();
            setRecording(true);
            speechRecognitionRef.current.start();
        });
    };

    const stopRecording = () => {
        mediaRecorderRef.current.stop();
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
        setRecording(false);
        setRecordingCompleted(true);
        speechRecognitionRef.current.stop();
    };

    const analyzeTranscript = async (transcript) => {
        try {
            const response = await fetch('http://localhost:8080/api/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': apiKey  // Replace with your actual API key or token
                },
                body: JSON.stringify({ transcript })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.text();
            setAiFeedback(result);
        } catch (error) {
            console.error('Error analyzing transcript:', error);
        }
    };
    

    return (
        <div className="video-rec-container">
            <h1>Mock Interview</h1>
            {!recordingCompleted ? (
                <>
                    <div className={`video-container ${currentQuestion ? 'large' : ''}`}>
                        <video 
                            ref={videoRef} 
                            controls 
                            className="video-frame"
                        />
                    </div>
                    <div className="button-container">
                        {!recording ? (
                            <button className="start-button" onClick={startRecording}>Start Recording</button>
                        ) : (
                            <button className="stop-button" onClick={stopRecording}>Stop</button>
                        )}
                    </div>
                    {currentQuestion && (
                        <div className="question-popup">
                            <h2>Current Question:</h2>
                            <p>{currentQuestion}</p>
                        </div>
                    )}
                    {transcription && (
                        <div className="transcription-container">
                            <h2>Transcription:</h2>
                            <p>{transcription}</p>
                        </div>
                    )}
                    {aiFeedback && (
                        <div className="ai-feedback-container">
                            <h2>AI Feedback:</h2>
                            <p>{aiFeedback}</p>
                        </div>
                    )}
                </>
            ) : (
                <div className="video-preview-container">
                    {videoURL && (
                        <>
                            <h2>Recorded Video:</h2>
                            <video src={videoURL} width="400" controls className="video-preview" />
                        </>
                    )}
                    {transcription && (
                        <div className="transcription-container">
                            <h2>Transcription:</h2>
                            <p>{transcription}</p>
                        </div>
                    )}
                    {aiFeedback && (
                        <div className="ai-feedback-container">
                            <h2>AI Feedback:</h2>
                            <p>{aiFeedback}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default VideoRec;
