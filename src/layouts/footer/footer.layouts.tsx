import React from 'react';
import {
  FooterContainer,
  FooterText,
  FooterPrimaryText,
  FooterSignUpText,
  FooterFormContainer,
  FooterInput,
  FooterButton,
  FooterSocialContainer,
  FooterSocialMedia,
} from './footer.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagramSquare,
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare,
} from '@fortawesome/free-brands-svg-icons';

export const FooterLayout: React.FC = () => {
  return (
    <>
      <FooterContainer>
        <FooterText>
          <FooterPrimaryText>Ready to Cook?</FooterPrimaryText>
          <FooterSignUpText>
            Sign up for our weekly newsletters!
          </FooterSignUpText>
          <FooterFormContainer>
            <FooterInput
              placeholder="Enter your email"
              id="email"
            ></FooterInput>
            <FooterButton>Sign Up</FooterButton>
          </FooterFormContainer>
          <FooterSocialContainer>
            <FooterSocialMedia>
              <FontAwesomeIcon icon={faInstagramSquare} size="3x" />
            </FooterSocialMedia>
            <FooterSocialMedia>
              <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
            </FooterSocialMedia>
            <FooterSocialMedia>
              <FontAwesomeIcon icon={faTwitterSquare} size="3x" />
            </FooterSocialMedia>
            <FooterSocialMedia>
              <FontAwesomeIcon icon={faYoutubeSquare} size="3x" />
            </FooterSocialMedia>
          </FooterSocialContainer>
        </FooterText>
      </FooterContainer>
    </>
  );
};
