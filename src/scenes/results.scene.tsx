import { routes } from 'core/router/routes';
import React from 'react';
import { Link } from 'react-router-dom';

export const ResultsScene: React.FC = () => {
  return (
    <>
      <h1>Hello from Results Scene</h1>
      <Link to={routes.home}>Back to Home</Link>
    </>
  );
};
