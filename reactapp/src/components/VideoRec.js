import React, { useState, useRef, useEffect } from 'react';
import '../assets/style/VideoRec.css';  // Import the CSS file for styling

const mockQuestions = [
    "Tell me about yourself.",
    "Why do you want this job?",
    "What are your strengths and weaknesses?",
    "Describe a challenge you faced and how you handled it.",
    "Where do you see yourself in 5 years?"
];

function VideoRec() {
    const [recording, setRecording] = useState(false);
    const [videoURL, setVideoURL] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState('');
    const [recordingCompleted, setRecordingCompleted] = useState(false);
    const videoRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const questionIndex = useRef(0);

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
        return () => {
            // Cleanup: stop all media tracks when component unmounts
            if (videoRef.current?.srcObject) {
                videoRef.current.srcObject.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

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
        }).catch(error => {
            console.error("Error accessing media devices.", error);
        });
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            if (videoRef.current.srcObject) {
                videoRef.current.srcObject.getTracks().forEach(track => track.stop());
            }
            setRecording(false);
            setRecordingCompleted(true);
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
                    <div>
                        {!recording ? (
                            <button onClick={startRecording}>Start Recording</button>
                        ) : (
                            <button onClick={stopRecording}>Stop Recording</button>
                        )}
                    </div>
                    {currentQuestion && (
                        <div className="question-popup">
                            <h2>Current Question:</h2>
                            <p>{currentQuestion}</p>
                        </div>
                    )}
                </>
            ) : (
                <div>
                    {videoURL && (
                        <>
                            <h2>Recorded Video:</h2>
                            <video src={videoURL} width="400" controls />
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default VideoRec;
