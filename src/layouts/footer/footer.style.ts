import styled from 'styled-components';
import {
  primaryColor,
  secondaryColor,
  tertiaryColor,
  signUpColor,
  principalFont,
} from '../../common-app/theme/app.style';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0;
  height: 26.25rem;
  width: 100%;
  background-image: url(../src/assets/img/footer_tree.png);
  background-size: cover;
  background-position: center center;
`;
export const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FooterPrimaryText = styled.h1`
  margin-top: 5rem;
  color: ${primaryColor};
`;
export const FooterSignUpText = styled.h2`
  color: ${tertiaryColor};
  margin: 0;
`;
export const FooterFormContainer = styled.div`
  display: flex;
  margin-top: 1.313rem;
  margin-bottom: 3.438rem;
`;
export const FooterInput = styled.input`
  width: 26.75rem;
  height: 3.438rem;
  margin-right: 0.625rem;
  border-radius: 0.625rem;
  border: 1px solid ${primaryColor};
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
    border: 1px solid ${primaryColor};
    box-shadow: 0 0 10px ${secondaryColor};
  }
`;

export const FooterButton = styled.button`
  width: 12.5rem;
  border-radius: 0.625rem;
  border: 1px solid ${primaryColor};
  background: ${primaryColor};
  color: ${signUpColor};
  font-family: ${principalFont};
  font-size: 1.75rem;
  box-shadow: 0 10px 20px -8px rgba(0, 0, 0, 0.7);
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;

  :after {
    content: '>>';
    position: absolute;
    opacity: 0;
    top: 12px;
    right: -20px;
    transition: 0.5s;
  }

  :hover {
    background: ${secondaryColor};
    border: 1px solid ${secondaryColor};
    padding-right: 24px;
    padding-left: 8px;
  }

  :hover:after {
    opacity: 1;
    right: 10px;
  }
  :active {
    transform: translateY(4px);
  }
`;

export const FooterSocialContainer = styled.div`
  display: flex;
  margin-top: 0.625rem;
  color: ${primaryColor};
`;
export const FooterSocialMedia = styled.div`
  color: ${primaryColor};
  margin: 0.313rem;
  transition: transform 0.3s;

  :hover {
    cursor: pointer;
    transform: scale(1.2);
    color: ${secondaryColor};
  }
  :active {
    transform: translateY(4px);
  }
`;
