// ResourcesPage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ResourcesPage = () => {
  const dispatch = useDispatch();
  const resources = useSelector((store) => store.resources);

  useEffect(() => {
    dispatch({ type: 'FETCH_RESOURCES' });
  }, [dispatch]);

  return (
    <div>
      <h1>Resources Page</h1>
      {/* Render the fetched resources */}
      {resources.map((category) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <ul>
            {category.resources.map((resource) => (
              <li key={resource.id}>
                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                  {resource.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ResourcesPage;