import { AppHeader } from 'common-app/components/app-header.component';
import { FooterLayout } from 'pods/footer/footer.component';
import { MealsContainer } from 'pods/meals';
import React from 'react';
import { useParams } from 'react-router-dom';

export const CategoryScene: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <AppHeader />
      <MealsContainer category={id} />
      <FooterLayout />
    </>
  );
};
