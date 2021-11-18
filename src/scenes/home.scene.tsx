import { routes } from 'core/router/routes';
import { FooterLayout } from 'layouts/footer/footer.layouts';
import { WorldCuisineLayout } from 'layouts/world-cuisine/world-cuisine.layouts';
import { FeatureRecipeContainer } from 'pods/feature-recipe';
import React from 'react';
import { Link } from 'react-router-dom';

export const HomeScene: React.FC = () => {
  return (
    <>
      <FeatureRecipeContainer />
      <Link to={routes.recipe('123')}>Navigate to recipe</Link>
      <WorldCuisineLayout />
      <FooterLayout />
    </>
  );
};
