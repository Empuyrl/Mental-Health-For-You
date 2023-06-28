import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import JournalButton from '../../JournalModal/JournalButton';

const DepressionPage = () => {
  const [answers, setAnswers] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const history = useHistory();

  // This is where you select the depression data from your store.
  const depressionResults = useSelector((store) => store.depressionResponse);

  // This useEffect will dispatch the fetch action when the component mounts.
  useEffect(() => {
    dispatch({ type: 'FETCH_DEPRESSION_RESPONSE' });
  }, [dispatch]);

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const score = answers.reduce((total, answer) => total + answer, 0);
    const payload = {
      user_id: user.id,
      score,
    };
    dispatch({ type: 'SUBMIT_DEPRESSION_RESPONSE', payload });
    history.push('/results');
  };

  return (
    <div>
      <h1>Patient Depression Questionnaire PHQ-9</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Over the last two weeks, how often have you been bothered by the following problems?</p>
          <p>0 - Not at all, 1 - Several days, 2 - More than half the days, 3 - Nearly every day</p>
          <label>
            Little interest or pleasure in doing things:
            <div>
              <button
                className={answers[0] === 0 ? 'selected' : ''}
                onClick={() => handleAnswerChange(0, 0)}
              >
                0 - Not at all
              </button>
              <button
                className={answers[0] === 1 ? 'selected' : ''}
                onClick={() => handleAnswerChange(0, 1)}
              >
                1 - Several days
              </button>
              <button
                className={answers[0] === 2 ? 'selected' : ''}
                onClick={() => handleAnswerChange(0, 2)}
              >
                2 - More than half the days
              </button>
              <button
                className={answers[0] === 3 ? 'selected' : ''}
                onClick={() => handleAnswerChange(0, 3)}
              >
                3 - Nearly every day
              </button>
            </div>
          </label>
          <label>
            Feeling down, depressed, or hopeless:
            <div>
              <button
                className={answers[1] === 0 ? 'selected' : ''}
                onClick={() => handleAnswerChange(1, 0)}
              >
                0 - Not at all
              </button>
              <button
                className={answers[1] === 1 ? 'selected' : ''}
                onClick={() => handleAnswerChange(1, 1)}
              >
                1 - Several days
              </button>
              <button
                className={answers[1] === 2 ? 'selected' : ''}
                onClick={() => handleAnswerChange(1, 2)}
              >
                2 - More than half the days
              </button>
              <button
                className={answers[1] === 3 ? 'selected' : ''}
                onClick={() => handleAnswerChange(1, 3)}
              >
                3 - Nearly every day
              </button>
            </div>
          </label>
          <label>
            Trouble sleeping or sleeping too much:
            <div>
              <button
                className={answers[2] === 0 ? 'selected' : ''}
                onClick={() => handleAnswerChange(2, 0)}
              >
                0 - Not at all
              </button>
              <button
                className={answers[2] === 1 ? 'selected' : ''}
                onClick={() => handleAnswerChange(2, 1)}
              >
                1 - Several days
              </button>
              <button
                className={answers[2] === 2 ? 'selected' : ''}
                onClick={() => handleAnswerChange(2, 2)}
              >
                2 - More than half the days
              </button>
              <button
                className={answers[2] === 3 ? 'selected' : ''}
                onClick={() => handleAnswerChange(2, 3)}
              >
                3 - Nearly every day
              </button>
            </div>
          </label>
          <label>
            Feeling tired or having little energy:
            <div>
              <button
                className={answers[3] === 0 ? 'selected' : ''}
                onClick={() => handleAnswerChange(3, 0)}
              >
                0 - Not at all
              </button>
              <button
                className={answers[3] === 1 ? 'selected' : ''}
                onClick={() => handleAnswerChange(3, 1)}
              >
                1 - Several days
              </button>
              <button
                className={answers[3] === 2 ? 'selected' : ''}
                onClick={() => handleAnswerChange(3, 2)}
              >
                2 - More than half the days
              </button>
              <button
                className={answers[3] === 3 ? 'selected' : ''}
                onClick={() => handleAnswerChange(3, 3)}
              >
                3 - Nearly every day
              </button>
            </div>
          </label>
          <label>
            Poor appetite or overeating:
            <div>
              <button
                className={answers[4] === 0 ? 'selected' : ''}
                onClick={() => handleAnswerChange(4, 0)}
              >
                0 - Not at all
              </button>
              <button
                className={answers[4] === 1 ? 'selected' : ''}
                onClick={() => handleAnswerChange(4, 1)}
              >
                1 - Several days
              </button>
              <button
                className={answers[4] === 2 ? 'selected' : ''}
                onClick={() => handleAnswerChange(4, 2)}
              >
                2 - More than half the days
              </button>
              <button
                className={answers[4] === 3 ? 'selected' : ''}
                onClick={() => handleAnswerChange(4, 3)}
              >
                3 - Nearly every day
              </button>
            </div>
          </label>
          <label>
            Feeling bad about yourself - or that you are a failure or have let yourself or your family down:
            <div>
              <button
                className={answers[5] === 0 ? 'selected' : ''}
                onClick={() => handleAnswerChange(5, 0)}
              >
                0 - Not at all
              </button>
              <button
                className={answers[5] === 1 ? 'selected' : ''}
                onClick={() => handleAnswerChange(5, 1)}
              >
                1 - Several days
              </button>
              <button
                className={answers[5] === 2 ? 'selected' : ''}
                onClick={() => handleAnswerChange(5, 2)}
              >
                2 - More than half the days
              </button>
              <button
                className={answers[5] === 3 ? 'selected' : ''}
                onClick={() => handleAnswerChange(5, 3)}
              >
                3 - Nearly every day
              </button>
            </div>
          </label>
          <label>
            Trouble concentrating on things, such as reading the newspaper or watching television:
            <div>
              <button
                className={answers[6] === 0 ? 'selected' : ''}
                onClick={() => handleAnswerChange(6, 0)}
              >
                0 - Not at all
              </button>
              <button
                className={answers[6] === 1 ? 'selected' : ''}
                onClick={() => handleAnswerChange(6, 1)}
              >
                1 - Several days
              </button>
              <button
                className={answers[6] === 2 ? 'selected' : ''}
                onClick={() => handleAnswerChange(6, 2)}
              >
                2 - More than half the days
              </button>
              <button
                className={answers[6] === 3 ? 'selected' : ''}
                onClick={() => handleAnswerChange(6, 3)}
              >
                3 - Nearly every day
              </button>
            </div>
          </label>
          <label>
            Moving or speaking so slowly that other people could have noticed?
            <div>
              <button
                className={answers[7] === 0 ? 'selected' : ''}
                onClick={() => handleAnswerChange(7, 0)}
              >
                0 - Not at all
              </button>
              <button
                className={answers[7] === 1 ? 'selected' : ''}
                onClick={() => handleAnswerChange(7, 1)}
              >
                1 - Several days
              </button>
              <button
                className={answers[7] === 2 ? 'selected' : ''}
                onClick={() => handleAnswerChange(7, 2)}
              >
                2 - More than half the days
              </button>
              <button
                className={answers[7] === 3 ? 'selected' : ''}
                onClick={() => handleAnswerChange(7, 3)}
              >
                3 - Nearly every day
              </button>
            </div>
          </label>
          <label>
            Thoughts that you would be better off dead or of hurting yourself in some way:
            <div>
              <button
                className={answers[8] === 0 ? 'selected' : ''}
                onClick={() => handleAnswerChange(8, 0)}
              >
                0 - Not at all
              </button>
              <button
                className={answers[8] === 1 ? 'selected' : ''}
                onClick={() => handleAnswerChange(8, 1)}
              >
                1 - Several days
              </button>
              <button
                className={answers[8] === 2 ? 'selected' : ''}
                onClick={() => handleAnswerChange(8, 2)}
              >
                2 - More than half the days
              </button>
              <button
                className={answers[8] === 3 ? 'selected' : ''}
                onClick={() => handleAnswerChange(8, 3)}
              >
                3 - Nearly every day
              </button>
            </div>
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <JournalButton />
      <div>
        {/* Make sure to handle the case where depressionResults is undefined */}
      </div>
    </div>
  );
};

export default DepressionPage;