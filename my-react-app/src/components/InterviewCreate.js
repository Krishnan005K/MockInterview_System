import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  InputLabel,
  Typography,
  Box,
  Paper,
  Grid,
} from '@mui/material';
// import './InterviewCreateCss.css';

function InterviewCreate() {
  const [intervieweeEmail, setIntervieweeEmail] = useState('');
  const [interviewDateTime, setInterviewDateTime] = useState('');
  const [roundNumber, setRoundNumber] = useState('');
  const [roundName, setRoundName] = useState('');
  const [duration, setDuration] = useState('');
  const [question, setQuestion] = useState('');
  const [questionType, setQuestionType] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [questions, setQuestions] = useState([]);
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const [showCreateTestButton, setShowCreateTestButton] = useState(false);
  const [showTestForm, setShowTestForm] = useState(false);

  const interviewerEmail = 'staticemail@example.com'; // Static interviewer email ID

  const handleScheduleSubmit = (e) => {
    e.preventDefault();
    setShowQuestionForm(true); // Show the question creation form
  };

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    setQuestions([...questions, { roundName, question, questionType, options, correctAnswer }]);
    setQuestion('');
    setQuestionType('');
    setOptions(['', '', '', '']);
    setCorrectAnswer('');
    setShowCreateTestButton(true);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleCreateTest = () => {
    setShowTestForm(true);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h2" gutterBottom>
        Schedule Interview
      </Typography>
      <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
        <form className="schedule-form" onSubmit={handleScheduleSubmit}>
          <TextField
            label="Interviewee Email ID"
            type="email"
            value={intervieweeEmail}
            onChange={(e) => setIntervieweeEmail(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Interviewer Email ID"
            type="email"
            value={interviewerEmail}
            readOnly
            fullWidth
            margin="normal"
          />
          <TextField
            label="Interview Date & Time"
            type="datetime-local"
            value={interviewDateTime}
            onChange={(e) => setInterviewDateTime(e.target.value)}
            fullWidth
            required
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Round Number"
            type="number"
            value={roundNumber}
            onChange={(e) => setRoundNumber(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <FormControl fullWidth required margin="normal">
            <InputLabel>Round Name</InputLabel>
            <Select
              value={roundName}
              onChange={(e) => setRoundName(e.target.value)}
            >
              <MenuItem value="Technical Round">Technical Round</MenuItem>
              <MenuItem value="Aptitude Round">Aptitude Round</MenuItem>
              <MenuItem value="Group Discussion">Group Discussion</MenuItem>
              <MenuItem value="Behavioral Round">Behavioral Round</MenuItem>
              <MenuItem value="Mock Presentation">Mock Presentation</MenuItem>
              <MenuItem value="HR Round">HR Round</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Duration"
            type="time"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            fullWidth
            required
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 1,
            }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Schedule Interview
          </Button>
        </form>
      </Paper>

      {showQuestionForm && (
        <>
          <Typography variant="h5" component="h2" gutterBottom>
            Create Questions for Rounds
          </Typography>
          <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
            <form className="question-form" onSubmit={handleQuestionSubmit}>
              <TextField
                label="Enter question"
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                fullWidth
                required
                margin="normal"
              />
              <FormControl component="fieldset" margin="normal">
                <FormLabel component="legend">Question Type</FormLabel>
                <RadioGroup
                  value={questionType}
                  onChange={(e) => setQuestionType(e.target.value)}
                >
                  <FormControlLabel
                    value="radio"
                    control={<Radio />}
                    label="Radio"
                  />
                  <FormControlLabel
                    value="checkbox"
                    control={<Checkbox />}
                    label="Checkbox"
                  />
                </RadioGroup>
              </FormControl>
              {questionType && (
                <div className="options">
                  {options.map((option, index) => (
                    <Box key={index} display="flex" alignItems="center" marginBottom="8px">
                      {questionType === 'radio' ? (
                        <Radio disabled />
                      ) : (
                        <Checkbox disabled />
                      )}
                      <TextField
                        value={option}
                        onChange={(e) => handleOptionChange(index, e.target.value)}
                        placeholder={`Option ${index + 1}`}
                        fullWidth
                        required
                      />
                    </Box>
                  ))}
                  <TextField
                    label="Enter correct answer"
                    type="text"
                    value={correctAnswer}
                    onChange={(e) => setCorrectAnswer(e.target.value)}
                    fullWidth
                    required
                    margin="normal"
                  />
                </div>
              )}
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Add Question
              </Button>
            </form>
          </Paper>
        </>
      )}

      {showCreateTestButton && (
        <Button
          className="create-test-button"
          onClick={handleCreateTest}
          variant="contained"
          color="secondary"
          fullWidth
        >
          Create Test
        </Button>
      )}

      {showTestForm && (
        <>
          <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Test Form
            </Typography>
            {questions.map((q, index) => (
              <Box key={index} marginBottom="16px">
                <Typography variant="body1">
                  <strong>{q.roundName}:</strong> {q.question}
                </Typography>
                <div className="options">
                  {q.options.map((option, idx) => (
                    <Box key={idx} display="flex" alignItems="center">
                      {q.questionType === 'radio' ? (
                        <Radio disabled />
                      ) : (
                        <Checkbox disabled />
                      )}
                      <Typography variant="body2">{option}</Typography>
                    </Box>
                  ))}
                </div>
              </Box>
            ))}
          </Paper>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Correct Answers
            </Typography>
            {questions.map((q, index) => (
              <Box key={index} marginBottom="16px">
                <Typography variant="body1">
                  <strong>{q.roundName}:</strong> {q.question}
                </Typography>
                <Typography variant="body2">
                  <strong>Correct Answer:</strong> {q.correctAnswer}
                </Typography>
              </Box>
            ))}
          </Paper>
        </>
      )}
    </Container>
  );
}

export default InterviewCreate;
