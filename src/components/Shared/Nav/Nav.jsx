import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Prime Solo Project</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          <>
            <Link className="navLink" to="/login">
              Login
            </Link>
            <Link className="navLink" to="/registration">
              Register
            </Link>
          </>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>
            <Link className="navLink" to="/info">
              Info Page
            </Link>
            <Link className="navLink" to="/profile">
              Profile
            </Link>
            <Link className="navLink" to="/depression">
              Depression Page
            </Link>
            <Link className="navLink" to="/stress">
              Stress Page
            </Link>
            <Link className="navLink" to="/anxiety">
              Anxiety Page
            </Link>
            <Link className="navLink" to="/resources">
              Resources
            </Link>
            <Link className="navLink" to="/journal">
              Journal
            </Link>
            <Link className="navLink" to="/notes">
              Notes
            </Link>
            {/* Add more links here */}
            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
