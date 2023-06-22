import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AnxietyPage() {
  const [answers, setAnswers] = useState([0, 0, 0, 0, 0, 0, 0]);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

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
    dispatch({ type: 'SUBMIT_ANXIETY_RESPONSE', payload });
  };

  return (
    <div>
      <h1>General Anxiety Questionnaire GAD-7</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Over the last two weeks, how often have you been bothered by the following problems?</p>
          <p>0 - Not at all, 1 - Several days, 2 - More than half the days, 3 - Nearly every day</p>
          <label>
            Feeling nervous, anxious, or on edge:
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
            Not being able to stop or control worrying:
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
            Worrying too much about different things:
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
            Trouble relaxing:
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
            Being so restless that it is hard to sit still:
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
            Becoming easily annoyed or irritable:
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
            Feeling afraid, as if something awful might happen:
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
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AnxietyPage;