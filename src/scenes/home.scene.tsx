import { routes } from 'core/router/routes';
import React from 'react';
import { Link } from 'react-router-dom';

export const HomeScene: React.FC = () => {
  return (
    <>
      <h1>Hello from Home Scene</h1>
      <Link to={routes.recipe('123')}>Navigate to recipe</Link>
    </>
  );
};
