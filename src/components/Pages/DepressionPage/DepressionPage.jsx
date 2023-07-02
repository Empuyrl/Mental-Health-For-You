import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import JournalButton from '../../JournalModal/JournalButton';
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



const DepressionPage = () => {
  const [answers, setAnswers] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
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

  let value1 = Number(old_Value1);
  let value2 = Number(old_Value2);
  let value3 = Number(old_Value3);
  let value4 = Number(old_Value4);
  let value5 = Number(old_Value5);
  let value6 = Number(old_Value6);
  let value7 = Number(old_Value7);
  let value8 = Number(old_Value8);
  let value9 = Number(old_Value9);
  //  LOG  [1, 2, 3, 4]
  const valueArray = [value1, value2, value3, value4, value5, value6, value7, value8, value9];
  // allFunctions.addScore(valueArray);


  const handleAnswerChange = (index, value) => {
    console.log(`handleAnswerChange called with index: ${index} and value: ${value}`);
    const updatedAnswers = [...answers];
    //problem seems to be the math isn't actually being added
    console.log(updatedAnswers);
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
      scoreMessage = 'Minimal depression';
    } else if (score >= 5 && score <= 9) {
      scoreMessage = 'Mild depression';
    } else if (score >= 10 && score <= 14) {
      scoreMessage = 'Moderate depression';
    } else if (score >= 15 && score <= 19) {
      scoreMessage = 'Moderately severe depression';
    } else if (score >= 20 && score <= 27) {
      scoreMessage = 'Severe depression';
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

    dispatch({ type: 'SUBMIT_DEPRESSION_RESPONSE', payload: payload });

    history.push('/results');
  };


  const questions = [
    "Little interest or pleasure in doing things:",
    "Feeling down, depressed, or hopeless:",
    "Trouble sleeping or sleeping too much:",
    "Feeling tired or having little energy:",
    "Poor appetite or overeating:",
    "Feeling bad about yourself - or that you are a failure or have let yourself or your family down:",
    "Trouble concentrating on things, such as reading the newspaper or watching television:",
    "Moving or speaking so slowly that other people could have noticed?",
    "Thoughts that you would be better off dead or of hurting yourself in some way:"
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
            Patient Depression Questionnaire PHQ-9
            <JournalButton />
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6">Over the last two weeks, how often have you been bothered by the following problems?</Typography>
              <Typography variant="h6">0 - Not at all, 1 - Several days, 2 - More than half the days, 3 - Nearly every day</Typography>
            </Box>
            {questions.map((question, i) => (
              <Box key={i} sx={{ mb: 2 }}>
                <Typography variant="h6">
                  {question}
                </Typography>
                <Grid container spacing={2}>
                  {[...Array(4)].map((_, value) => (
                    <Grid item xs>
                      <FormControlLabel
                        key={value}
                        control={<Radio />}
                        label={`${value} - ${["Not at all", "Several days", "More than half the days", "Nearly every day"][value]}`}
                        checked={answers[i] === value}
                        onClick={() => handleAnswerChange(i, value)}
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
          <Box>
            {/* Make sure to handle the case where depressionResults is undefined */}
          </Box>
        </StyledPaper>
      </Container>
    </Box>
  );
}

export default DepressionPage;