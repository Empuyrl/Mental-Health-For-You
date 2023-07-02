import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import JournalButton from '../../JournalModal/JournalButton';
import allFunctions from '../../helper/helper.jsx'
import { Box, Container, Typography, FormControlLabel, Radio, Button, Paper, Grid } from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)(({ theme }) => ({
  maxWidth: 800,
  margin: 'auto',
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
}));

function AnxietyPage() {
  const [answers, setAnswers] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [scoreMessage, setScoreMessage] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const history = useHistory();

  let old_Value1 = 1;
  let old_Value2 = 2;
  let old_Value3 = 3;
  let old_Value4 = 4;
  let old_Value5 = 5;
  let old_Value6 = 6;
  let old_Value7 = 7;

  let value1 = Number(old_Value1);
  let value2 = Number(old_Value2);
  let value3 = Number(old_Value3);
  let value4 = Number(old_Value4);
  let value5 = Number(old_Value5);
  let value6 = Number(old_Value6);
  let value7 = Number(old_Value7);



  const valueArray = [value1, value2, value3, value4, value5, value6, value7];



  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = parseInt(value);
    setAnswers(updatedAnswers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const score = answers.reduce((total, answer) => total + answer, 0);
    console.log(`Calculated score: ${score}`);
    console.log(`Calculated score message: ${scoreMessage}`);
    // Calculate the score message based on the score
    let scoreMessage;
    if (score >= 0 && score <= 4) {
      scoreMessage = 'Minimal anxiety';
    } else if (score >= 5 && score <= 9) {
      scoreMessage = 'Mild anxiety';
    } else if (score >= 10 && score <= 14) {
      scoreMessage = 'Moderate anxiety';
    } else if (score >= 15 && score <= 21) {
      scoreMessage = 'Severe anxiety';
    } else {
      scoreMessage = 'Invalid Result';
    }
    const sum = allFunctions.addScore(answers);
    setScoreMessage(scoreMessage);
    const payload = {
      user_id: user.id,
      score: sum,
      scoreMessage: scoreMessage,
    };
    console.log(`Dispatching payload: ${JSON.stringify(payload)}`);
    dispatch({ type: 'SUBMIT_ANXIETY_RESPONSE', payload: payload });
    history.push('/results');
  };

  const questions = [
    "Over the last two weeks, how often have you been bothered by feeling nervous, anxious, or on edge?",
    "Over the last two weeks, how often have you been bothered by not being able to stop or control worrying?",
    "Over the last two weeks, how often have you been bothered by worrying too much about different things?",
    "Over the last two weeks, how often have you been bothered by trouble relaxing?",
    "Over the last two weeks, how often have you been bothered by being so restless that it is hard to sit still?",
    "Over the last two weeks, how often have you been bothered by becoming easily annoyed or irritable?",
    "Over the last two weeks, how often have you been bothered by feeling afraid, as if something awful might happen?",
  ];

  return (
    <Box
      sx={{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        padding: '2rem',
      }}
    >
      <Container sx={{ mt: 4 }}>
        <StyledPaper>
          <Typography variant="h4" sx={{ mb: 2 }}>
            General Anxiety Questionnaire GAD-7
            <JournalButton />
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6">
                Over the last two weeks, how often have you been bothered by the following problems?
              </Typography>
              <Typography variant="h6">
                0 - Not at all, 1 - Several days, 2 - More than half the days, 3 - Nearly every day
              </Typography>
            </Box>
            {questions.map((question, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="h6">{question}</Typography>
                <Grid container spacing={2}>
                  {[...Array(4)].map((_, value) => (
                    <Grid item xs>
                      <FormControlLabel
                        key={value}
                        control={<Radio />}
                        label={`${value} - ${[
                          'Not at all',
                          'Several days',
                          'More than half the days',
                          'Nearly every day',
                        ][value]}`}
                        checked={answers[index] === value}
                        onClick={() => handleAnswerChange(index, value)}
                        sx={{ flex: 1 }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ))}
            <Box sx={{ mb: 2 }}>
              <Typography>{scoreMessage}</Typography>
              <Button type="submit"
                variant="contained"
                sx={{
                  backgroundColor: '#007BFF', // Blue color
                  '&:hover': {
                    backgroundColor: '#28a745', // Green color
                  }
                }}
              >
              </Button>
            </Box>
          </form>
          <Box>
            {/* Make sure to handle the case where anxietyResults is undefined */}
          </Box>
        </StyledPaper>
      </Container>
    </Box>
  );
};

export default AnxietyPage;