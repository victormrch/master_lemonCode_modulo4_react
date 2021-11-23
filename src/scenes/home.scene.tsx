import { FooterLayout } from 'layouts/footer/footer.layouts';
import { WorldCuisineLayout } from 'layouts/world-cuisine/world-cuisine.layouts';
import { MealsCategoryLayout } from 'layouts/meals-category/meals-category.layouts';
import { FeatureRecipeContainer } from 'pods/feature-recipe';
import React from 'react';
import { NavbarLayout } from 'layouts/navbar/navbar.layouts';

export const HomeScene: React.FC = () => {
  return (
    <>
      <NavbarLayout />
      <FeatureRecipeContainer />
      <MealsCategoryLayout />
      <WorldCuisineLayout />
      <FooterLayout />
    </>
  );
};
