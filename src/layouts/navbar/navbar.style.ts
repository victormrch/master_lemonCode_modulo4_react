import styled from 'styled-components';
import {
  primaryColor,
  principalFont,
  secondaryColor,
  signUpColor,
} from '../../common-app/theme/app.style';

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
export const NavbarInput = styled.input`
  width: 26.75rem;
  height: 3.438rem;
  margin-right: 0.625rem;
  border-radius: 0.625rem;
  border: 0.063rem solid ${primaryColor};
  box-sizing: border-box;
  padding: 1.031rem 0.875rem;
  font-family: ${principalFont};
  font-size: 1.5rem;

  :focus::placeholder {
    color: transparent;
    transition: 0.2s;
  }
  :focus {
    outline: none !important;
    border: 0.063rem solid ${primaryColor};
    box-shadow: 0 0 0.625rem ${secondaryColor};
  }
`;

export const NavbarButton = styled.button`
  width: 12.5rem;
  height: 3.25rem;
  margin-top: 2rem;
  border-radius: 0.625rem;
  border: 0.063rem solid ${secondaryColor};
  background: ${secondaryColor};
  color: ${signUpColor};
  font-family: ${principalFont};
  font-size: 1.75rem;
  box-shadow: 0 0.625rem 1.25rem -0.5rem rgba(0, 0, 0, 0.7);
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;

  :after {
    content: '>>';
    position: absolute;
    opacity: 0;
    top: 0.75rem;
    right: -1.25rem;
    transition: 0.5s;
  }

  :hover {
    background: ${primaryColor};
    border: 0.063rem solid ${primaryColor};
    padding-right: 1.5rem;
    padding-left: 0.5rem;
  }

  :hover:after {
    opacity: 1;
    right: 0.625rem;
  }
  :active {
    transform: translateY(0.25rem);
  }
`;
