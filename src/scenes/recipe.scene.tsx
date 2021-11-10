import { routes } from 'core/router/routes';
import React from 'react';
import { Link } from 'react-router-dom';

export const RecipeScene: React.FC = () => {
  return (
    <>
      <h1>Hello from Recipe Scene</h1>;
      <Link to={routes.category('brunch')}>Navigate to category</Link>
    </>
  );
};
