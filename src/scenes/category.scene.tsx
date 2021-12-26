import { AppHeader } from 'common-app/components/app-header/app-header.component';
import { countries } from 'common/constants/countries';
import { FooterLayout } from 'pods/footer/footer.component';
import { MealsContainer } from 'pods/meals';
import { WorldCuisineDetailsContainer } from 'pods/world-cuisine-details';
import React from 'react';
import { useParams } from 'react-router-dom';

export const CategoryScene: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const isCountry = countries.includes(id);

  return (
    <>
      <AppHeader />
      {isCountry ? (
        <WorldCuisineDetailsContainer country={id} />
      ) : (
        <MealsContainer category={id} />
      )}
      <FooterLayout />
    </>
  );
};
