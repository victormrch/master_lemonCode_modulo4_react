import styled from 'styled-components';
import {
  primaryColor,
  principalFont,
  secondaryColor,
  signUpColor,
} from '../../core/theme/app.style';

export const SearchInput = styled.input`
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

  @media (max-width: 425px) {
    width: 18.75rem;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchButton = styled.button`
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
