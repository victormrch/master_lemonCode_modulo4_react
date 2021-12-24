import { FooterLayout } from 'pods/footer/footer.component';
import React from 'react';
import { AppHeader } from '../common-app/components/app-header.component';
import { useParams } from 'react-router-dom';
import { DetailRecipeContainer } from 'pods/detail-recipe';

export const RecipeScene: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <AppHeader />
      <DetailRecipeContainer id={id} />
      <FooterLayout />
    </>
  );
};
