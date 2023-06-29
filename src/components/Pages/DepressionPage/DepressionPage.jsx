import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import JournalButton from '../../JournalModal/JournalButton';
import allFunctions from '../../helper/helper.jsx'
import { Container, Typography, Box, Fab, Button } from '@mui/material';


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

  return (
    <div>
     <Container>
      <Typography variant="h4">
      Patient Depression Questionnaire PHQ-9
      </Typography>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Over the last two weeks, how often have you been bothered by the following problems?</p>
          <p>0 - Not at all, 1 - Several days, 2 - More than half the days, 3 - Nearly every day</p>
          <label>
          <Typography variant="h6">
  Little interest or pleasure in doing things:
</Typography>
            <div>
    <FabExtended
      variant="extended"
      className={answers[0] === 0 ? 'selected' : ''}
      onClick={() => handleAnswerChange(0, 0)}
    >
      0 - Not at all
    </FabExtended>
    <FabExtended
      variant="extended"
      className={answers[0] === 1 ? 'selected' : ''}
      onClick={() => handleAnswerChange(0, 1)}
    >
      1 - Several days
    </FabExtended>
    <FabExtended
      variant="extended"
      className={answers[0] === 2 ? 'selected' : ''}
      onClick={() => handleAnswerChange(0, 2)}
    >
      2 - More than half the days
    </FabExtended>
    <FabExtended
      variant="extended"
      className={answers[0] === 3 ? 'selected' : ''}
      onClick={() => handleAnswerChange(0, 3)}
    >
      3 - Nearly every day
    </FabExtended>
  </div>
</label>
          <label>
            Feeling down, depressed, or hopeless:
            <div>
            <FabExtended
      variant="extended"
      className={answers[0] === 0 ? 'selected' : ''}
      onClick={() => handleAnswerChange(1, 0)}
    >
      0 - Not at all
    </FabExtended>
    <FabExtended
      variant="extended"
      className={answers[0] === 1 ? 'selected' : ''}
      onClick={() => handleAnswerChange(1, 1)}
    >
      1 - Several days
    </FabExtended>
    <FabExtended
      variant="extended"
      className={answers[0] === 2 ? 'selected' : ''}
      onClick={() => handleAnswerChange(1, 2)}
    >
      2 - More than half the days
    </FabExtended>
    <FabExtended
      variant="extended"
      className={answers[0] === 3 ? 'selected' : ''}
      onClick={() => handleAnswerChange(1, 3)}
    >
      3 - Nearly every day
    </FabExtended>
            </div>
          </label>
          <label>
            Trouble sleeping or sleeping too much:
            <div>
            <FabExtended
      variant="extended"
      className={answers[0] === 0 ? 'selected' : ''}
      onClick={() => handleAnswerChange(2, 0)}
    >
      0 - Not at all
    </FabExtended>
    <FabExtended
      variant="extended"
      className={answers[0] === 1 ? 'selected' : ''}
      onClick={() => handleAnswerChange(2, 1)}
    >
      1 - Several days
    </FabExtended>
    <FabExtended
      variant="extended"
      className={answers[0] === 2 ? 'selected' : ''}
      onClick={() => handleAnswerChange(2, 2)}
    >
      2 - More than half the days
    </FabExtended>
    <FabExtended
      variant="extended"
      className={answers[0] === 3 ? 'selected' : ''}
      onClick={() => handleAnswerChange(3, 3)}
    >
      3 - Nearly every day
    </FabExtended>
            </div>
          </label>
          <label>
            Feeling tired or having little energy:
            <div>
            <FabExtended
      variant="extended"
      className={answers[0] === 0 ? 'selected' : ''}
      onClick={() => handleAnswerChange(3, 0)}
    >
      0 - Not at all
    </FabExtended>
    <FabExtended
      variant="extended"
      className={answers[0] === 1 ? 'selected' : ''}
      onClick={() => handleAnswerChange(3, 1)}
    >
      1 - Several days
    </FabExtended>
    <FabExtended
      variant="extended"
      className={answers[0] === 2 ? 'selected' : ''}
      onClick={() => handleAnswerChange(3, 2)}
    >
      2 - More than half the days
    </FabExtended>
    <FabExtended
      variant="extended"
      className={answers[0] === 3 ? 'selected' : ''}
      onClick={() => handleAnswerChange(3, 3)}
    >
      3 - Nearly every day
    </FabExtended>
            </div>
          </label>
          <label>
            Poor appetite or overeating:
            <div>
            <FabExtended
      variant="extended"
      className={answers[0] === 0 ? 'selected' : ''}
      onClick={() => handleAnswerChange(4, 0)}
    >
      0 - Not at all
    </FabExtended>
    <FabExtended
      variant="extended"
      className={answers[0] === 1 ? 'selected' : ''}
      onClick={() => handleAnswerChange(4, 1)}
    >
      1 - Several days
    </FabExtended>
    <FabExtended
      variant="extended"
      className={answers[0] === 2 ? 'selected' : ''}
      onClick={() => handleAnswerChange(4, 2)}
    >
      2 - More than half the days
    </FabExtended>
    <FabExtended
      variant="extended"
      className={answers[0] === 3 ? 'selected' : ''}
      onClick={() => handleAnswerChange(4, 3)}
    >
      3 - Nearly every day
    </FabExtended>
            </div>
          </label>
          <label>
            Feeling bad about yourself - or that you are a failure or have let yourself or your family down:
            <div>
            <FabExtended
      variant="extended"
      className={answers[0] === 0 ? 'selected' : ''}
      onClick={() => handleAnswerChange(5, 0)}
    >
      0 - Not at all
    </FabExtended>
    <FabExtended
      variant="extended"
      className={answers[0] === 1 ? 'selected' : ''}
      onClick={() => handleAnswerChange(5, 1)}
    >
      1 - Several days
    </FabExtended>
    <FabExtended
      variant="extended"
      className={answers[0] === 2 ? 'selected' : ''}
      onClick={() => handleAnswerChange(5, 2)}
    >
      2 - More than half the days
    </FabExtended>
    <FabExtended
      variant="extended"
      className={answers[0] === 3 ? 'selected' : ''}
      onClick={() => handleAnswerChange(5, 3)}
    >
      3 - Nearly every day
    </FabExtended>
            </div>
          </label>
          <label>
            Trouble concentrating on things, such as reading the newspaper or watching television:
            <div>
              <FabExtended
      variant="extended"
      className={answers[0] === 0 ? 'selected' : ''}
      onClick={() => handleAnswerChange(6, 0)}
    >
      0 - Not at all
    </FabExtended>
    <FabExtended
      variant="extended"
      className={answers[0] === 1 ? 'selected' : ''}
      onClick={() => handleAnswerChange(6, 1)}
    >
      1 - Several days
    </FabExtended>
    <FabExtended
      variant="extended"
      className={answers[0] === 2 ? 'selected' : ''}
      onClick={() => handleAnswerChange(6, 2)}
    >
      2 - More than half the days
    </FabExtended>
    <FabExtended
      variant="extended"
      className={answers[0] === 3 ? 'selected' : ''}
      onClick={() => handleAnswerChange(6, 3)}
    >
      3 - Nearly every day
    </FabExtended>
            </div>
          </label>
          <label>
            Moving or speaking so slowly that other people could have noticed?
            <div>
            <FabExtended
      variant="extended"
      className={answers[0] === 0 ? 'selected' : ''}
      onClick={() => handleAnswerChange(7, 0)}
    >
      0 - Not at all
    </FabExtended>
    <FabExtended
      variant="extended"
      className={answers[0] === 1 ? 'selected' : ''}
      onClick={() => handleAnswerChange(7, 1)}
    >
      1 - Several days
    </FabExtended>
    <FabExtended
      variant="extended"
      className={answers[0] === 2 ? 'selected' : ''}
      onClick={() => handleAnswerChange(7, 2)}
    >
      2 - More than half the days
    </FabExtended>
    <FabExtended
      variant="extended"
      className={answers[0] === 3 ? 'selected' : ''}
      onClick={() => handleAnswerChange(7, 3)}
    >
      3 - Nearly every day
    </FabExtended>
            </div>
          </label>
          <label>
            Thoughts that you would be better off dead or of hurting yourself in some way:
            <div>
            <FabExtended
      variant="extended"
      className={answers[0] === 0 ? 'selected' : ''}
      onClick={() => handleAnswerChange(8, 0)}
    >
      0 - Not at all
    </FabExtended>
    <FabExtended
      variant="extended"
      className={answers[0] === 1 ? 'selected' : ''}
      onClick={() => handleAnswerChange(8, 1)}
    >
      1 - Several days
    </FabExtended>
    <FabExtended
      variant="extended"
      className={answers[0] === 2 ? 'selected' : ''}
      onClick={() => handleAnswerChange(8, 2)}
    >
      2 - More than half the days
    </FabExtended>
    <FabExtended
      variant="extended"
      className={answers[0] === 3 ? 'selected' : ''}
      onClick={() => handleAnswerChange(8, 3)}
    >
      3 - Nearly every day
    </FabExtended>
            </div>
          </label>
        </div>
        <Box>
          <Typography>Score Message: {scoreMessage}</Typography>
          <Button type="submit" variant="contained" color="secondary" sx={{ marginTop: 2 }}>
            Submit
          </Button>
        </Box>
      </form>
      <JournalButton />
      <Box>
        {/* Make sure to handle the case where depressionResults is undefined */}
      </Box>
    </Container>
    </div>
  );
};

export default DepressionPage;