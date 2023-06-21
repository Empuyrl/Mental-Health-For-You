import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function StressPage() {
  const [answers, setAnswers] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const reversedAnswers = answers.map((answer) => 4 - answer); // Reversing the scores for questions 4, 5, 7, and 8
    const score = reversedAnswers.reduce((total, answer) => total + answer, 0);
    const payload = {
      user_id: user.id,
      score,
    };
    dispatch({ type: 'SUBMIT_STRESS_RESPONSE', payload });
  };

  return (
    <div>
      <h1>Stress Questionnaire</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Over the last month, how often have you been bothered by the following problems?</p>
          <p>0 - Never, 1 - Almost never, 2 - Sometimes, 3 - Fairly often, 4 - Very often</p>
          <label>
            In the last month, how often have you been upset because of something that happened unexpectedly and out of your control?
            <select value={answers[0]} onChange={(e) => handleAnswerChange(0, parseInt(e.target.value))}>
              <option value={0}>0 - Never</option>
              <option value={1}>1 - Almost never</option>
              <option value={2}>2 - Sometimes</option>
              <option value={3}>3 - Fairly often</option>
              <option value={4}>4 - Very often</option>
            </select>
          </label>
          <label>
            In the last month, how often have you felt that you were unable to control the important things in your life?
            <select value={answers[0]} onChange={(e) => handleAnswerChange(0, parseInt(e.target.value))}>
              <option value={0}>0 - Never</option>
              <option value={1}>1 - Almost never</option>
              <option value={2}>2 - Sometimes</option>
              <option value={3}>3 - Fairly often</option>
              <option value={4}>4 - Very often</option>
            </select>
          </label>
          <label>
           In the last month, how often have you felt nervous and stressed?
            <select value={answers[0]} onChange={(e) => handleAnswerChange(0, parseInt(e.target.value))}>
              <option value={0}>0 - Never</option>
              <option value={1}>1 - Almost never</option>
              <option value={2}>2 - Sometimes</option>
              <option value={3}>3 - Fairly often</option>
              <option value={4}>4 - Very often</option>
            </select>
          </label>
          <label>
            In the last month, how often have you felt condifent about your ability to handle your personal problems?
            <select value={answers[0]} onChange={(e) => handleAnswerChange(0, parseInt(e.target.value))}>
              <option value={0}>0 - Never</option>
              <option value={1}>1 - Almost never</option>
              <option value={2}>2 - Sometimes</option>
              <option value={3}>3 - Fairly often</option>
              <option value={4}>4 - Very often</option>
            </select>
          </label>
          <label>
            In the last month, how often have you felt that things were going your way?
            <select value={answers[0]} onChange={(e) => handleAnswerChange(0, parseInt(e.target.value))}>
              <option value={0}>0 - Never</option>
              <option value={1}>1 - Almost never</option>
              <option value={2}>2 - Sometimes</option>
              <option value={3}>3 - Fairly often</option>
              <option value={4}>4 - Very often</option>
            </select>
          </label>
          <label>
            In the last month, how often have you found that you could not cope with all the things that you had to do?
            <select value={answers[0]} onChange={(e) => handleAnswerChange(0, parseInt(e.target.value))}>
              <option value={0}>0 - Never</option>
              <option value={1}>1 - Almost never</option>
              <option value={2}>2 - Sometimes</option>
              <option value={3}>3 - Fairly often</option>
              <option value={4}>4 - Very often</option>
            </select>
          </label>
          <label>
            In the last month, how often have you been able to control irritations in your life?
            <select value={answers[0]} onChange={(e) => handleAnswerChange(0, parseInt(e.target.value))}>
              <option value={0}>0 - Never</option>
              <option value={1}>1 - Almost never</option>
              <option value={2}>2 - Sometimes</option>
              <option value={3}>3 - Fairly often</option>
              <option value={4}>4 - Very often</option>
            </select>
          </label>
          <label>
            In the last month, how often have you felt that you were on top of things?
            <select value={answers[0]} onChange={(e) => handleAnswerChange(0, parseInt(e.target.value))}>
              <option value={0}>0 - Never</option>
              <option value={1}>1 - Almost never</option>
              <option value={2}>2 - Sometimes</option>
              <option value={3}>3 - Fairly often</option>
              <option value={4}>4 - Very often</option>
            </select>
          </label>
          <label>
            In the last month, how often have you been angered because of things that happened that were outside of your control?
            <select value={answers[0]} onChange={(e) => handleAnswerChange(0, parseInt(e.target.value))}>
              <option value={0}>0 - Never</option>
              <option value={1}>1 - Almost never</option>
              <option value={2}>2 - Sometimes</option>
              <option value={3}>3 - Fairly often</option>
              <option value={4}>4 - Very often</option>
            </select>
          </label>
          <label>
            In the last month, how often have you felt difficulties were oiling up so high that you could not overcome them?
            <select value={answers[0]} onChange={(e) => handleAnswerChange(0, parseInt(e.target.value))}>
              <option value={0}>0 - Never</option>
              <option value={1}>1 - Almost never</option>
              <option value={2}>2 - Sometimes</option>
              <option value={3}>3 - Fairly often</option>
              <option value={4}>4 - Very often</option>
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

export default StressPage;
