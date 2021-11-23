import React from 'react';
import {
  NavbarButton,
  NavbarContainer,
  NavbarFormContainer,
  NavbarImage,
  NavbarInput,
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
            <NavbarInput placeholder="I want to cook today..."></NavbarInput>
            <NavbarButton>SEARCH</NavbarButton>
          </NavbarFormContainer>
        </NavbarText>
      </NavbarContainer>
    </>
  );
};
