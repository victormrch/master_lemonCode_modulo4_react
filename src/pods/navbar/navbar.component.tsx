import { SearchInputComponent } from 'pods/search-input/search-input.component';
import React from 'react';
import {
  NavbarContainer,
  NavbarFormContainer,
  NavbarImage,
  NavbarMainTitle,
  NavbarSecondaryTitle,
  NavbarText,
} from './navbar.style';

export const NavbarLayout: React.FC = () => {
  return (
    <>
      <NavbarContainer>
        <NavbarImage />
        <NavbarText>
          <NavbarMainTitle>KITCHEN JUNGLE</NavbarMainTitle>
          <NavbarSecondaryTitle>Even a Monkey Can Do It</NavbarSecondaryTitle>
          <NavbarFormContainer>
            <SearchInputComponent />
          </NavbarFormContainer>
        </NavbarText>
      </NavbarContainer>
    </>
  );
};
