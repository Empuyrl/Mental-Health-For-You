import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import JournalButton from '../../JournalModal/JournalButton';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled(Box)(({ theme }) => ({
  background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://peelresearch.com/wp-content/uploads/2019/09/The-learning-brain.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  color: '#FFFF00',
  padding: theme.spacing(2),
}));

const StyledLink = styled(Link)(({ theme }) => ({
  margin: theme.spacing(0.5),
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: '#FFFF00',
  textDecoration: 'none',
}));

const ResourcesPage = () => {
  const dispatch = useDispatch();
  const resources = useSelector((state) => state.resources);
  const location = useLocation();

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
    <Container>
      <Typography variant="h1" sx={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: 'bold' }}>
        Supportive Resources for Mental Well-being
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '1.5rem', fontStyle: 'italic', textAlign: 'center', marginTop: '2rem' }}>
        "Mental health is not a destination, but a process. It's about how you drive, not where you're going."
      </Typography>
      <Box>
        <Typography variant="h2" sx={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold' }}>Suicide Prevention Resources</Typography>
        <ul>
          {suicideResources.map((resource) => (
            <li key={resource.id}>
              <a href={resource.resource_link} target="_blank" rel="noopener noreferrer" className="link">
                {resource.resource_description}
              </a>
            </li>
          ))}
        </ul>
      </Box>
      <Box>
        <StyledLink to="/resources?type=depression">
          Depression Resources
        </StyledLink>
        <StyledLink to="/resources?type=anxiety">
          Anxiety Resources
        </StyledLink>
        <StyledLink to="/resources?type=stress">
          Stress Resources
        </StyledLink>
        {/* Add links for other subjects */}
      </Box>
      {getFilteredResources().map((resource) => (
        <Box key={resource.id}>
          <Typography variant="h2" sx={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold' }}>{resource.resource_type}</Typography>
          <ul>
            <li>
              <a href={resource.resource_link} target="_blank" rel="noopener noreferrer" className="link">
                {resource.resource_description}
              </a>
            </li>
          </ul>
        </Box>
      ))}
      <JournalButton />
    </Container>
  );
};

export default ResourcesPage;
