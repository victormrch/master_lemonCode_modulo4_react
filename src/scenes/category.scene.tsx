import { routes } from 'core/router/routes';
import React from 'react';
import { Link } from 'react-router-dom';

export const CategoryScene: React.FC = () => {
  return (
    <>
      <h1>Hello from Category Scene</h1>
      <Link to={routes.results}>Navigate to result</Link>
    </>
  );
};
