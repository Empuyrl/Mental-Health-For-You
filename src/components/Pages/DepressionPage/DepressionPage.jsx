import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DepressionPage = () => {
const [answers, setAnswers] = useState([0,0,0,0,0,0,0,0,0]);
const dispatch = useDispatch();
const user = useSelector((store) => store.user);

const handleAnswerChange = (index, value) => {
  const updatedAnswers = [...answers];
  setAnswers(updatedAnswers);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const score = answers.reduce((total, answer) => total + answer, 0);
  const payload = {
    user_id: user.id,
    score,
    note,
  };
  dispatch({type: 'SUBMIT_DEPRESSION_RESPONSE', payload});
};

return (
  <div>
    <h1>Depression Questionnaire PHQ-9</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <p>Over the last two weeks, how often have you been bothered by the following problems?</p>
        <p>0 - Not at all, 1 - Several days, 2 - More than half the days, 3 - Nearly every day</p>
        <label>
          Feeling down, depressed, or hopeless:
          <select value={answers[0]} onChange={(e) => handleAnswerChange(0, parseInt(e.target.value))}>
            <option value={0}>0 - Not at all</option>
            <option value={1}>1 - Several days</option>
            <option value={2}>2 - More than half the days</option>
            <option value={3}>3 - Nearly every day</option>
          </select>
        </label>
        <label>
          Little interest or pleasure in doing things:
          <select value={answers[0]} onChange={(e) => handleAnswerChange(0, parseInt(e.target.value))}>
            <option value={0}>0 - Not at all</option>
            <option value={1}>1 - Several days</option>
            <option value={2}>2 - More than half the days</option>
            <option value={3}>3 - Nearly every day</option>
          </select>
        </label>
        <label>
          Trouble falling or staying asleep, or sleeping too much:
          <select value={answers[0]} onChange={(e) => handleAnswerChange(0, parseInt(e.target.value))}>
            <option value={0}>0 - Not at all</option>
            <option value={1}>1 - Several days</option>
            <option value={2}>2 - More than half the days</option>
            <option value={3}>3 - Nearly every day</option>
          </select>
        </label>
        <label>
          Feeling tired or having little energy:
          <select value={answers[0]} onChange={(e) => handleAnswerChange(0, parseInt(e.target.value))}>
            <option value={0}>0 - Not at all</option>
            <option value={1}>1 - Several days</option>
            <option value={2}>2 - More than half the days</option>
            <option value={3}>3 - Nearly every day</option>
          </select>
        </label>
        <label>
          Poor appetite or overeating:
          <select value={answers[0]} onChange={(e) => handleAnswerChange(0, parseInt(e.target.value))}>
            <option value={0}>0 - Not at all</option>
            <option value={1}>1 - Several days</option>
            <option value={2}>2 - More than half the days</option>
            <option value={3}>3 - Nearly every day</option>
          </select>
        </label>
        <label>
          Feeling bad about yourself -- or that you are a failure or have let yourself or your family down:
          <select value={answers[0]} onChange={(e) => handleAnswerChange(0, parseInt(e.target.value))}>
            <option value={0}>0 - Not at all</option>
            <option value={1}>1 - Several days</option>
            <option value={2}>2 - More than half the days</option>
            <option value={3}>3 - Nearly every day</option>
          </select>
        </label>
        <label>
          Trouble concentrating on things, such as reading the newspaper or watching television:
          <select value={answers[0]} onChange={(e) => handleAnswerChange(0, parseInt(e.target.value))}>
            <option value={0}>0 - Not at all</option>
            <option value={1}>1 - Several days</option>
            <option value={2}>2 - More than half the days</option>
            <option value={3}>3 - Nearly every day</option>
          </select>
        </label>
        <label>
          Moving or speaking so slowly that other people could have noticed? Or so fidgety or restless that you have been moving a lot more than usual:
          <select value={answers[0]} onChange={(e) => handleAnswerChange(0, parseInt(e.target.value))}>
            <option value={0}>0 - Not at all</option>
            <option value={1}>1 - Several days</option>
            <option value={2}>2 - More than half the days</option>
            <option value={3}>3 - Nearly every day</option>
          </select>
        </label>
        <label>
         Thoughts that you would be better off dead or thoughts of hurting yourself in some way:
          <select value={answers[0]} onChange={(e) => handleAnswerChange(0, parseInt(e.target.value))}>
            <option value={0}>0 - Not at all</option>
            <option value={1}>1 - Several days</option>
            <option value={2}>2 - More than half the days</option>
            <option value={3}>3 - Nearly every day</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Additional notes:
          <textarea value={note} onChange={(e) => setNote(e.target.value)} />
        </label>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
);
}

export default DepressionPage;