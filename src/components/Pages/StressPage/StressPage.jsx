import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import JournalButton from '../../JournalModal/JournalButton';
import { useHistory } from 'react-router-dom';
import allFunctions from '../../helper/helper.jsx'

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
    dispatch({ type: 'SUBMIT_STRESS_RESPONSE', payload: {answers: answers} });

    history.push('/results');
  };
  

  return (
    <div>
      <h1>Percieved Stress Scale Questionnaire PSS</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Over the last month, how often have you been bothered by the following problems?</p>
          <p>0 - Never, 1 - Almost never, 2 - Sometimes, 3 - Fairly often, 4 - Very often</p>
          <label>
            In the last month, how often have you been upset because of something that happened unexpectedly and out of your control?
            <div>
              <button
                type="button"
                className={answers[0] === 0 ? 'selected' : ''}
                onClick={() => handleAnswerChange(0, 0)}
              >
                0 - Never
              </button>
              <button
                type="button"
                className={answers[0] === 1 ? 'selected' : ''}
                onClick={() => handleAnswerChange(0, 1)}
              >
                1 - Almost never
              </button>
              <button
                type="button"
                className={answers[0] === 2 ? 'selected' : ''}
                onClick={() => handleAnswerChange(0, 2)}
              >
                2 - Sometimes
              </button>
              <button
                type="button"
                className={answers[0] === 3 ? 'selected' : ''}
                onClick={() => handleAnswerChange(0, 3)}
              >
                3 - Fairly often
              </button>
              <button
                type="button"
                className={answers[0] === 4 ? 'selected' : ''}
                onClick={() => handleAnswerChange(0, 4)}
              >
                4 - Very often
              </button>
            </div>
          </label>
          <label>
            In the last month, how often have you felt that you were unable to control the important things in your life?
            <div>
              <button
                type="button"
                className={answers[1] === 0 ? 'selected' : ''}
                onClick={() => handleAnswerChange(1, 0)}
              >
                0 - Never
              </button>
              <button
                type="button"
                className={answers[1] === 1 ? 'selected' : ''}
                onClick={() => handleAnswerChange(1, 1)}
              >
                1 - Almost never
              </button>
              <button
                type="button"
                className={answers[1] === 2 ? 'selected' : ''}
                onClick={() => handleAnswerChange(1, 2)}
              >
                2 - Sometimes
              </button>
              <button
                type="button"
                className={answers[1] === 3 ? 'selected' : ''}
                onClick={() => handleAnswerChange(1, 3)}
              >
                3 - Fairly often
              </button>
              <button
                type="button"
                className={answers[1] === 4 ? 'selected' : ''}
                onClick={() => handleAnswerChange(1, 4)}
              >
                4 - Very often
              </button>
            </div>
          </label>
          <label>
            In the last month, how often have you felt nervous and stressed?
            <div>
              <button
                type="button"
                className={answers[2] === 0 ? 'selected' : ''}
                onClick={() => handleAnswerChange(2, 0)}
              >
                0 - Never
              </button>
              <button
                type="button"
                className={answers[2] === 1 ? 'selected' : ''}
                onClick={() => handleAnswerChange(2, 1)}
              >
                1 - Almost never
              </button>
              <button
                type="button"
                className={answers[2] === 2 ? 'selected' : ''}
                onClick={() => handleAnswerChange(2, 2)}
              >
                2 - Sometimes
              </button>
              <button
                type="button"
                className={answers[2] === 3 ? 'selected' : ''}
                onClick={() => handleAnswerChange(2, 3)}
              >
                3 - Fairly often
              </button>
              <button
                type="button"
                className={answers[2] === 4 ? 'selected' : ''}
                onClick={() => handleAnswerChange(2, 4)}
              >
                4 - Very often
              </button>
            </div>
          </label>
          <label>
            In the last month, how often have you felt confident about your ability to handle your personal problems?
            <div>
              <button
                type="button"
                className={answers[3] === 0 ? 'selected' : ''}
                onClick={() => handleAnswerChange(0, 3)}
              >
                0 - Never
              </button>
              <button
                type="button"
                className={answers[3] === 1 ? 'selected' : ''}
                onClick={() => handleAnswerChange(1, 3)}
              >
                1 - Almost never
              </button>
              <button
                type="button"
                className={answers[3] === 2 ? 'selected' : ''}
                onClick={() => handleAnswerChange(2, 3)}
              >
                2 - Sometimes
              </button>
              <button
                type="button"
                className={answers[3] === 3 ? 'selected' : ''}
                onClick={() => handleAnswerChange(3, 3)}
              >
                3 - Fairly often
              </button>
              <button
                type="button"
                className={answers[3] === 4 ? 'selected' : ''}
                onClick={() => handleAnswerChange(4, 3)}
              >
                4 - Very often
              </button>
            </div>
          </label>
          <label>
            In the last month, how often have you felt that things were going your way?
            <div>
              <button
                type="button"
                className={answers[4] === 0 ? 'selected' : ''}
                onClick={() => handleAnswerChange(0, 4)}
              >
                0 - Never
              </button>
              <button
                type="button"
                className={answers[4] === 1 ? 'selected' : ''}
                onClick={() => handleAnswerChange(1, 4)}
              >
                1 - Almost never
              </button>
              <button
                type="button"
                className={answers[4] === 2 ? 'selected' : ''}
                onClick={() => handleAnswerChange(2, 4)}
              >
                2 - Sometimes
              </button>
              <button
                type="button"
                className={answers[4] === 3 ? 'selected' : ''}
                onClick={() => handleAnswerChange(3, 4)}
              >
                3 - Fairly often
              </button>
              <button
                type="button"
                className={answers[4] === 4 ? 'selected' : ''}
                onClick={() => handleAnswerChange(4, 4)}
              >
                4 - Very often
              </button>
            </div>
          </label>
          <label>
            In the last month, how often have you found that you could not cope with all the things that you had to do?
            <div>
              <button
                type="button"
                className={answers[5] === 0 ? 'selected' : ''}
                onClick={() => handleAnswerChange(5, 0)}
              >
                0 - Never
              </button>
              <button
                type="button"
                className={answers[5] === 1 ? 'selected' : ''}
                onClick={() => handleAnswerChange(5, 1)}
              >
                1 - Almost never
              </button>
              <button
                type="button"
                className={answers[5] === 2 ? 'selected' : ''}
                onClick={() => handleAnswerChange(5, 2)}
              >
                2 - Sometimes
              </button>
              <button
                type="button"
                className={answers[5] === 3 ? 'selected' : ''}
                onClick={() => handleAnswerChange(5, 3)}
              >
                3 - Fairly often
              </button>
              <button
                type="button"
                className={answers[5] === 4 ? 'selected' : ''}
                onClick={() => handleAnswerChange(5, 4)}
              >
                4 - Very often
              </button>
            </div>
          </label>
          <label>
            In the last month, how often have you been able to control irritations in your life?
            <div>
              <button
                type="button"
                className={answers[6] === 0 ? 'selected' : ''}
                onClick={() => handleAnswerChange(0, 6)}
              >
                0 - Never
              </button>
              <button
                type="button"
                className={answers[6] === 1 ? 'selected' : ''}
                onClick={() => handleAnswerChange(1, 6)}
              >
                1 - Almost never
              </button>
              <button
                type="button"
                className={answers[6] === 2 ? 'selected' : ''}
                onClick={() => handleAnswerChange(2, 6)}
              >
                2 - Sometimes
              </button>
              <button
                type="button"
                className={answers[6] === 3 ? 'selected' : ''}
                onClick={() => handleAnswerChange(3, 6)}
              >
                3 - Fairly often
              </button>
              <button
                type="button"
                className={answers[6] === 4 ? 'selected' : ''}
                onClick={() => handleAnswerChange(4, 6)}
              >
                4 - Very often
              </button>
            </div>
          </label>
          <label>
            In the last month, how often have you felt that you were on top of things?
            <div>
              <button
                type="button"
                className={answers[7] === 0 ? 'selected' : ''}
                onClick={() => handleAnswerChange(0, 7)}
              >
                0 - Never
              </button>
              <button
                type="button"
                className={answers[7] === 1 ? 'selected' : ''}
                onClick={() => handleAnswerChange(1, 7)}
              >
                1 - Almost never
              </button>
              <button
                type="button"
                className={answers[7] === 2 ? 'selected' : ''}
                onClick={() => handleAnswerChange(2, 7)}
              >
                2 - Sometimes
              </button>
              <button
                type="button"
                className={answers[7] === 3 ? 'selected' : ''}
                onClick={() => handleAnswerChange(3, 7)}
              >
                3 - Fairly often
              </button>
              <button
                type="button"
                className={answers[7] === 4 ? 'selected' : ''}
                onClick={() => handleAnswerChange(4, 7)}
              >
                4 - Very often
              </button>
            </div>
          </label>
          <label>
            In the last month, how often have you been angered because of things that happened that were outside of your control?
            <div>
              <button
                type="button"
                className={answers[8] === 0 ? 'selected' : ''}
                onClick={() => handleAnswerChange(8, 0)}
              >
                0 - Never
              </button>
              <button
                type="button"
                className={answers[8] === 1 ? 'selected' : ''}
                onClick={() => handleAnswerChange(8, 1)}
              >
                1 - Almost never
              </button>
              <button
                type="button"
                className={answers[8] === 2 ? 'selected' : ''}
                onClick={() => handleAnswerChange(8, 2)}
              >
                2 - Sometimes
              </button>
              <button
                type="button"
                className={answers[8] === 3 ? 'selected' : ''}
                onClick={() => handleAnswerChange(8, 3)}
              >
                3 - Fairly often
              </button>
              <button
                type="button"
                className={answers[8] === 4 ? 'selected' : ''}
                onClick={() => handleAnswerChange(8, 4)}
              >
                4 - Very often
              </button>
            </div>
          </label>
          <label>
            In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?
            <div>
              <button
                type="button"
                className={answers[9] === 0 ? 'selected' : ''}
                onClick={() => handleAnswerChange(9, 0)}
              >
                0 - Never
              </button>
              <button
                type="button"
                className={answers[9] === 1 ? 'selected' : ''}
                onClick={() => handleAnswerChange(9, 1)}
              >
                1 - Almost never
              </button>
              <button
                type="button"
                className={answers[9] === 2 ? 'selected' : ''}
                onClick={() => handleAnswerChange(9, 2)}
              >
                2 - Sometimes
              </button>
              <button
                type="button"
                className={answers[9] === 3 ? 'selected' : ''}
                onClick={() => handleAnswerChange(9, 3)}
              >
                3 - Fairly often
              </button>
              <button
                type="button"
                className={answers[9] === 4 ? 'selected' : ''}
                onClick={() => handleAnswerChange(9, 4)}
              >
                4 - Very often
              </button>
            </div>
          </label>
        </div>
        <div>
        <p>{scoreMessage}</p>
          <button type="submit">Submit</button>
        </div>
      </form>
      <JournalButton />
    </div>
  );
}

export default StressPage;
