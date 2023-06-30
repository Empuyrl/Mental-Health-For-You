import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar } from '@mui/material';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', 
    paddingLeft: '-10px' }}>
      <div className="nav">
        <Link to="/home">
          <h2 className="nav-title">Mind Matters</h2>
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
              {/* <Link className="navLink" to="/profile">
                Profile
              </Link> */}
              <Link className="navLink" to="/depression">
                Depression Page
              </Link>
              <Link className="navLink" to="/stress">
                Stress Page
              </Link>
              <Link className="navLink" to="/anxiety">
                Anxiety Page
              </Link>
              <Link className="navLink" to="/results">
                Results Page
              </Link>
              <Link className="navLink" to="/resources">
                Materials
              </Link>
              <Link className="navLink" to="/notebook">
                NoteBook
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
    </AppBar>
  );
}

export default Nav;