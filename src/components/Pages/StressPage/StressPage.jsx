import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import JournalButton from '../../JournalModal/JournalButton';
import { useHistory } from 'react-router-dom';

function StressPage() {
  const [answers, setAnswers] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [scoreMessage, setScoreMessage] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const history = useHistory();

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
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

    setScoreMessage(scoreMessage);

    const payload = {
      user_id: user.id,
      score,
    };
    console.log(`Dispatching payload: ${JSON.stringify(payload)}`);
    dispatch({ type: 'SUBMIT_STRESS_RESPONSE', payload });

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
                onClick={() => handleAnswerChange(3, 0)}
              >
                0 - Never
              </button>
              <button
                type="button"
                className={answers[3] === 1 ? 'selected' : ''}
                onClick={() => handleAnswerChange(3, 1)}
              >
                1 - Almost never
              </button>
              <button
                type="button"
                className={answers[3] === 2 ? 'selected' : ''}
                onClick={() => handleAnswerChange(3, 2)}
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
                onClick={() => handleAnswerChange(3, 4)}
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
                onClick={() => handleAnswerChange(4, 0)}
              >
                0 - Never
              </button>
              <button
                type="button"
                className={answers[4] === 1 ? 'selected' : ''}
                onClick={() => handleAnswerChange(4, 1)}
              >
                1 - Almost never
              </button>
              <button
                type="button"
                className={answers[4] === 2 ? 'selected' : ''}
                onClick={() => handleAnswerChange(4, 2)}
              >
                2 - Sometimes
              </button>
              <button
                type="button"
                className={answers[4] === 3 ? 'selected' : ''}
                onClick={() => handleAnswerChange(4, 3)}
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
                onClick={() => handleAnswerChange(6, 0)}
              >
                0 - Never
              </button>
              <button
                type="button"
                className={answers[6] === 1 ? 'selected' : ''}
                onClick={() => handleAnswerChange(6, 1)}
              >
                1 - Almost never
              </button>
              <button
                type="button"
                className={answers[6] === 2 ? 'selected' : ''}
                onClick={() => handleAnswerChange(6, 2)}
              >
                2 - Sometimes
              </button>
              <button
                type="button"
                className={answers[6] === 3 ? 'selected' : ''}
                onClick={() => handleAnswerChange(6, 3)}
              >
                3 - Fairly often
              </button>
              <button
                type="button"
                className={answers[6] === 4 ? 'selected' : ''}
                onClick={() => handleAnswerChange(6, 4)}
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
                onClick={() => handleAnswerChange(7, 0)}
              >
                0 - Never
              </button>
              <button
                type="button"
                className={answers[7] === 1 ? 'selected' : ''}
                onClick={() => handleAnswerChange(7, 1)}
              >
                1 - Almost never
              </button>
              <button
                type="button"
                className={answers[7] === 2 ? 'selected' : ''}
                onClick={() => handleAnswerChange(7, 2)}
              >
                2 - Sometimes
              </button>
              <button
                type="button"
                className={answers[7] === 3 ? 'selected' : ''}
                onClick={() => handleAnswerChange(7, 3)}
              >
                3 - Fairly often
              </button>
              <button
                type="button"
                className={answers[7] === 4 ? 'selected' : ''}
                onClick={() => handleAnswerChange(7, 4)}
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
          <button type="submit">Submit</button>
        </div>
      </form>
      <JournalButton />
    </div>
  );
}

export default StressPage;
