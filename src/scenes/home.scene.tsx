import { FooterLayout } from 'pods/footer/footer.component';
import { WorldCuisineLayout } from 'pods/world-cuisine/world-cuisine.component';
import { MealsCategoryLayout } from 'pods/meals-category/meals-category.component';
import { FeatureRecipeContainer } from 'pods/feature-recipe';
import React from 'react';
import { NavbarLayout } from 'pods/navbar/navbar.component';

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
