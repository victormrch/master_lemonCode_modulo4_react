import styled from 'styled-components';
import { primaryColor, secondaryColor } from '../../core/theme/app.style';

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-image: url(../src/assets/img/home_navbar_tree.png);
  background-size: cover;

  @media (max-width: 768px) {
    background-position: center center;
  }
`;
export const NavbarImage = styled.div`
  background-image: url(../src/assets/img/mono_home.png);
  width: 7.5rem;
  height: 7.5rem;
  background-size: cover;
  background-position: center center;

  @media (max-width: 768px) {
    width: 6.25rem;
    height: 6.25rem;
  }
`;
export const NavbarText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavbarMainTitle = styled.h1`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 5rem;
  margin: 0;
  color: ${primaryColor};

  @media (max-width: 425px) {
    font-size: 2rem;
  }
`;

export const NavbarSecondaryTitle = styled.h3`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 2.5rem;
  margin: 0rem;
  color: ${secondaryColor};

  @media (max-width: 425px) {
    font-size: 1.2rem;
  }
`;

export const NavbarFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.313rem;
  margin-bottom: 3.438rem;

  @media (max-width: 768px) {
  }
`;
