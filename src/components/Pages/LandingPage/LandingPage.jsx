import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterPage/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
            Welcome to our mental health platform! We are dedicated to providing resources and support to individuals facing various mental health challenges. Our mission is to promote mental well-being and cater to the unique needs of each person.
          </p>

          <p>
            We understand the importance of mental health and strive to create a safe and inclusive space where you can access valuable information related to depression, stress, anxiety, and other mental health topics. Through curated links to websites, blogs, forums, and more, we empower you with knowledge and guidance on your mental health journey.
          </p>

          <p>
            Take a step towards self-reflection and personal growth by starting a journal. Our journal feature allows you to privately document your thoughts and feelings. Journaling can be a powerful tool for emotional well-being, and we encourage you to explore its benefits by clicking the "Journal" button.
          </p>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;