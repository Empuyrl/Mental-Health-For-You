import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import JournalButton from '../../JournalModal/JournalButton';

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
    <div>
      <h1>Resources Page</h1>
      <div>
        <Link to="/resources?type=depression">Depression Resources</Link>
        <Link to="/resources?type=anxiety">Anxiety Resources</Link>
        <Link to="/resources?type=stress">Stress Resources</Link>
        {/* Add links for other subjects */}
      </div>
      <div>
        <h2>Suicide Prevention Resources</h2>
        <ul>
          {suicideResources.map((resource) => (
            <li key={resource.id}>
              <a href={resource.resource_link} target="_blank" rel="noopener noreferrer">
                {resource.resource_description}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {getFilteredResources().map((resource) => (
        <div key={resource.id}>
          <h2>{resource.resource_type}</h2>
          <ul>
            <li>
              <a href={resource.resource_link} target="_blank" rel="noopener noreferrer">
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
