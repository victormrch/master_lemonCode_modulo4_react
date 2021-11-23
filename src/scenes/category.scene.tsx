import { AppHeader } from '../common-app/components/app-header.component';
import { routes } from 'core/router/routes';
import { FooterLayout } from 'layouts/footer/footer.layouts';
import { MealsContainer } from 'pods/meals';
import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const CategoryScene: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <AppHeader />
      <MealsContainer category={id} />
      <Link to={routes.results}>Navigate to result</Link>
      <FooterLayout />
    </>
  );
};
