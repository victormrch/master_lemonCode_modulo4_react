import styled from 'styled-components';
import { primaryColor, secondaryColor } from '../../core/theme/app.style';

export const NavbarContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 25rem;
  width: 100%;
  background-image: url(../src/assets/img/home_navbar_tree.png);
  background-size: cover;
  background-position: center center;
`;
export const NavbarImage = styled.div`
  background-image: url(../src/assets/img/mono_home.png);
  width: 12.5rem;
  height: 12.5rem;
  background-size: cover;
  background-position: center center;
`;
export const NavbarText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavbarMainTitle = styled.h1`
  width: 100%;
  font-size: 5rem;
  margin: 2.5rem 0 0 0;
  color: ${primaryColor};
`;

export const NavbarSecondaryTitle = styled.h3`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 2.5rem;
  margin: 0rem;
  color: ${secondaryColor};
`;

export const NavbarFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.313rem;
  margin-bottom: 3.438rem;
`;
