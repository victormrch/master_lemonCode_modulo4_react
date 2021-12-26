import { AppHeader } from 'common-app/components/app-header/app-header.component';
import { SearchInputLayout } from 'layouts/search-input/search-input.layout';
import { FooterLayout } from 'pods/footer/footer.component';
import { SearchInputComponent } from 'pods/search-input/search-input.component';
import { SearchListContainer } from 'pods/search-list';
import React from 'react';
import { useParams } from 'react-router-dom';

export const ResultsScene: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <AppHeader />
      <SearchInputLayout>
        <SearchInputComponent />
      </SearchInputLayout>
      <SearchListContainer search={id} />
      <FooterLayout />
    </>
  );
};
