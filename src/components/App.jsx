import React, { useEffect } from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Nav from './Shared/Nav/Nav';
import Footer from './Shared/Footer/Footer';
import ProtectedRoute from './Shared/ProtectedRoute/ProtectedRoute';
import AboutPage from './Pages/AboutPage/AboutPage';
import UserPage from './Pages/UserPage/UserPage';
import InfoPage from './Pages/InfoPage/InfoPage';
import LandingPage from './Pages/LandingPage/LandingPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import DepressionPage from './Pages/DepressionPage/DepressionPage';
import StressPage from './Pages/StressPage/StressPage';
import AnxietyPage from './Pages/AnxietyPage/AnxietyPage';
import ResultsPage from './Pages/ResultsPage/ResultsPage';
import ProfilePage from './Pages/Profile/Profile';
import ResourcesPage from './Pages/ResourcesPage/ResourcesPage';
import NotebookPage from './Pages/NotebookPage/NotebookPage';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          <Route
            // open to all users
            exact
            path="/depression"
          >
            <DepressionPage />
          </Route>

          <Route
            // open to all users
            exact
            path="/stress"
          >
            <StressPage />
          </Route>

          <Route
            // open to all users
            exact
            path="/anxiety"
          >
            <AnxietyPage />
          </Route>

          <Route
            // open to all users
            exact
            path="/results"
          >
            <ResultsPage />
          </Route>

          <ProtectedRoute
            // logged in shows ProfilePage else redirects to /login
            exact
            path="/profile"
          >
            <ProfilePage />
          </ProtectedRoute>

          <Route
            // open to all users
            exact
            path="/resources"
          >
            <ResourcesPage />
          </Route>

          <Route
            // open to all users
            exact
            path="/notebook"
          >
            <NotebookPage />
          </Route>

          <Route
            exact
            path="/login"
          >
            {user.id ? (
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the login page
              <LoginPage />
            )}
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ? (
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the registration page
              <RegisterPage />
            )}
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ? (
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the Landing page
              <LandingPage />
            )}
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
