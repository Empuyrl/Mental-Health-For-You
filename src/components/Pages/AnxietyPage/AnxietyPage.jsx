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
      <h1>Anxiety Questionnaire GAD-7</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Over the last two weeks, how often have you been bothered by the following problems?</p>
          <p>0 - Not at all, 1 - Several days, 2 - More than half the days, 3 - Nearly every day</p>
          <label>
            Feeling nervous, anxious, or on edge:
            <select value={answers[0]} onChange={(e) => handleAnswerChange(0, parseInt(e.target.value))}>
              <option value={0}>0 - Not at all</option>
              <option value={1}>1 - Several days</option>
              <option value={2}>2 - More than half the days</option>
              <option value={3}>3 - Nearly every day</option>
            </select>
          </label>
          <label>
            Not being able to stop or control worrying:
            <select value={answers[0]} onChange={(e) => handleAnswerChange(0, parseInt(e.target.value))}>
              <option value={0}>0 - Not at all</option>
              <option value={1}>1 - Several days</option>
              <option value={2}>2 - More than half the days</option>
              <option value={3}>3 - Nearly every day</option>
            </select>
          </label>
          <label>
            Worrying too much about different things:
            <select value={answers[0]} onChange={(e) => handleAnswerChange(0, parseInt(e.target.value))}>
              <option value={0}>0 - Not at all</option>
              <option value={1}>1 - Several days</option>
              <option value={2}>2 - More than half the days</option>
              <option value={3}>3 - Nearly every day</option>
            </select>
          </label>
          <label>
           Trouble relaxing:
            <select value={answers[0]} onChange={(e) => handleAnswerChange(0, parseInt(e.target.value))}>
              <option value={0}>0 - Not at all</option>
              <option value={1}>1 - Several days</option>
              <option value={2}>2 - More than half the days</option>
              <option value={3}>3 - Nearly every day</option>
            </select>
          </label>
          <label>
           Being so restless that it is hard to sit still:
            <select value={answers[0]} onChange={(e) => handleAnswerChange(0, parseInt(e.target.value))}>
              <option value={0}>0 - Not at all</option>
              <option value={1}>1 - Several days</option>
              <option value={2}>2 - More than half the days</option>
              <option value={3}>3 - Nearly every day</option>
            </select>
          </label>
          <label>
            Becoming easily annoyed or irritable:
            <select value={answers[0]} onChange={(e) => handleAnswerChange(0, parseInt(e.target.value))}>
              <option value={0}>0 - Not at all</option>
              <option value={1}>1 - Several days</option>
              <option value={2}>2 - More than half the days</option>
              <option value={3}>3 - Nearly every day</option>
            </select>
          </label>
          <label>
           Felling afriad, as if something awful might happen:
            <select value={answers[0]} onChange={(e) => handleAnswerChange(0, parseInt(e.target.value))}>
              <option value={0}>0 - Not at all</option>
              <option value={1}>1 - Several days</option>
              <option value={2}>2 - More than half the days</option>
              <option value={3}>3 - Nearly every day</option>
            </select>
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