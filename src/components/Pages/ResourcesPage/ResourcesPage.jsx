import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import JournalButton from '../../JournalModal/JournalButton';
// import backgroundImage from './background.jpg';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  container: {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
    // backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    padding: '2rem',
  },
  title: {
    marginBottom: '2rem',
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  subtitle: {
    marginBottom: '1rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  link: {
    margin: '0.5rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none',
  },
  quote: {
    fontSize: '1.5rem',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: '2rem',
  },
}));

const ResourcesPage = () => {
  const dispatch = useDispatch();
  const resources = useSelector((state) => state.resources);
  const location = useLocation();
  const classes = useStyles();

  useEffect(() => {
    dispatch({ type: 'FETCH_RESOURCES' });
  }, [dispatch]);

  const getFilteredResources = () => {
    const params = new URLSearchParams(location.search);
    const resourceType = params.get('type');

    if (resourceType) {
      return resources.filter((resource) => resource.resource_type === resourceType);
    }

    return resources;
  };

  const suicideResources = resources.filter((resource) => resource.resource_type === 'suicide');

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Supportive Resources for Mental Well-being</h1>
      <p className={classes.quote}>
        "Mental health is not a destination, but a process. It's about how you drive, not where you're going."
      </p>
      <div>
      <h2 className={classes.subtitle}>Resource Categories</h2>
        <Link to="/resources?type=depression" className={classes.link}>
          Depression Resources
        </Link>
        <Link to="/resources?type=anxiety" className={classes.link}>
          Anxiety Resources
        </Link>
        <Link to="/resources?type=stress" className={classes.link}>
          Stress Resources
        </Link>
        {/* Add links for other subjects */}
      </div>
      <div>
        <h2 className={classes.subtitle}>Suicide Prevention Resources</h2>
        <ul>
          {suicideResources.map((resource) => (
            <li key={resource.id}>
              <a href={resource.resource_link} target="_blank" rel="noopener noreferrer" className={classes.link}>
                {resource.resource_description}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {getFilteredResources().map((resource) => (
        <div key={resource.id}>
          <h2 className={classes.subtitle}>{resource.resource_type}</h2>
          <ul>
            <li>
              <a href={resource.resource_link} target="_blank" rel="noopener noreferrer" className={classes.link}>
                {resource.resource_description}
              </a>
            </li>
          </ul>
        </div>
      ))}
      <JournalButton />
    </div>
  );
};

export default ResourcesPage;
