import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import JournalButton from '../../JournalModal/JournalButton';
import { useHistory } from 'react-router-dom';
import allFunctions from '../../helper/helper.jsx'
import { Container, Typography, Box, Button, Radio, FormControlLabel, Paper, Grid } from '@mui/material';
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

function StressPage() {
  const [answers, setAnswers] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
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
  let old_Value8 = 8;
  let old_Value9 = 9;
  let old_Value10 = 10;

  let value1 = Number(old_Value1);
  let value2 = Number(old_Value2);
  let value3 = Number(old_Value3);
  let value4 = Number(old_Value4);
  let value5 = Number(old_Value5);
  let value6 = Number(old_Value6);
  let value7 = Number(old_Value7);
  let value8 = Number(old_Value8);
  let value9 = Number(old_Value9);
  let value10 = Number(old_Value10);

  const valueArray = [value1, value2, value3, value4, value5, value6, value7, value8, value9, value10];
  // const newValue = (number1 + number2 + number3 + number4 + number5 + number6 + number7 + number8 + number9)
  // console.log('newValue', typeof newValue,newValue)






  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = parseInt(value);
    setAnswers(updatedAnswers);
    console.log(`Answer at index ${index} set to ${value}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Instead of reversing all answers, only reverse for the questions 4, 5, 7, and 8
    const reversedAnswers = answers.map((answer, index) => {
      // Subtract one from the index because the question numbers are 1-indexed
      if ([3, 4, 6, 7].includes(index)) {
        return 4 - answer;
      }
      return answer;
    });

    const score = reversedAnswers.reduce((a, b) => a + b, 0);
    console.log(`Total score: ${score}`);
    // Calculate the score message based on the score
    let scoreMessage;
    if (score < 14) {
      scoreMessage = "Low Stress";
    } else if (score < 27) {
      scoreMessage = "Moderate Stress";
    } else {
      scoreMessage = "High Stress";
    }
    const sum = allFunctions.addScore(answers);
    setScoreMessage(scoreMessage);

    const payload = {
      user_id: user.id,
      score: sum,
      scoreMessage: scoreMessage,
    };
    console.log(`Dispatching payload: ${JSON.stringify(payload)}`);
    dispatch({ type: 'SUBMIT_STRESS_RESPONSE', payload: payload });

    history.push('/results');
  };

  const questions = [
    "Over the last month, how often have you been upset because of something that happened unexpectedly and out of your control?",
    "In the last month, how often have you felt that you were unable to control the important things in your life?",
    "In the last month, how often have you felt nervous and stressed?",
    "In the last month, how often have you felt confident about your ability to handle your personal problems?",
    "In the last month, how often have you felt that things were going your way?",
    "In the last month, how often have you found that you could not cope with all the things that you had to do?",
    "In the last month, how often have you been able to control irritations in your life?",
    "In the last month, how often have you felt that you were on top of things?",
    "In the last month, how often have you been angered because of things that happened that were outside of your control?",
    "In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?"
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
            Perceived Stress Scale Questionnaire PSS
            <JournalButton />
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6">Over the last month, how often have you been bothered by the following problems?</Typography>
              <Typography variant="h6">0 - Never, 1 - Almost never, 2 - Sometimes, 3 - Fairly often, 4 - Very often</Typography>
            </Box>
            {questions.map((question, i) => (
              <Box key={i} sx={{ mb: 2 }}>
                <Typography variant="h6">{question}</Typography>
                <Grid container spacing={2}>
                  {[...Array(5)].map((_, value) => (
                    <Grid item xs={2} key={value}>
                      <FormControlLabel
                        control={<Radio />}
                        label={`${value} - ${['Never', 'Almost never', 'Sometimes', 'Fairly often', 'Very often'][value]}`}
                        checked={answers[i] === value}
                        onClick={() => handleAnswerChange(i, value)}
                        sx={{ flex: 1 }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ))}
            <Box sx={{ mb: 2 }}>
              <Typography> {scoreMessage}</Typography>
              <Button type="submit"
                variant="contained"
                sx={{
                  backgroundColor: '#007BFF', // Blue color
                  '&:hover': {
                    backgroundColor: '#28a745', // Green color
                  }
                }}
              >
                Submit
              </Button>
            </Box>
          </form>
          <Box>{/* Make sure to handle the case where stressResults is undefined */}</Box>
        </StyledPaper>
      </Container>
    </Box>
  );
}



export default StressPage;
