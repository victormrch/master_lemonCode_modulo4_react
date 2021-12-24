import React from 'react';
import { SearchInputContainer } from './search-input.style';

export const SearchInputLayout: React.FC = ({ children }) => {
  return (
    <>
      <SearchInputContainer>{children}</SearchInputContainer>
    </>
  );
};
