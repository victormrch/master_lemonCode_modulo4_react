import { routes } from 'core/router/routes';
import React from 'react';
import { Link } from 'react-router-dom';
import { AppHeader } from '../common-app/components/app-header.component';

export const ResultsScene: React.FC = () => {
  return (
    <>
      <AppHeader />
      <h1>Hello from Results Scene</h1>
      <Link to={routes.home}>Back to Home</Link>
    </>
  );
};
