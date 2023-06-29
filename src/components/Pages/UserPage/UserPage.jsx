import React from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import LogOutButton from '../../Shared/LogOutButton/LogOutButton';
import JournalButton from '../../JournalModal/JournalButton';


function UserPage() {
  const user = useSelector((store) => store.user);

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <Link to="/profile">View Profile</Link>
      <Link to="/depression">Depression Quiz</Link>
      <Link to="/anxiety">Anxiety Quiz</Link>
      <Link to="/stress">Stress Quiz</Link>
      <JournalButton />
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
