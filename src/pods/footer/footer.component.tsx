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
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export const FooterLayout: React.FC = () => {
  const faInstagramSquareProp = faInstagramSquare as IconProp;
  const faFacebookSquareProp = faFacebookSquare as IconProp;
  const faTwitterSquareProp = faTwitterSquare as IconProp;
  const faYoutubeSquareProp = faYoutubeSquare as IconProp;

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
              <FontAwesomeIcon icon={faInstagramSquareProp} size="3x" />
            </FooterSocialMedia>
            <FooterSocialMedia>
              <FontAwesomeIcon icon={faFacebookSquareProp} size="3x" />
            </FooterSocialMedia>
            <FooterSocialMedia>
              <FontAwesomeIcon icon={faTwitterSquareProp} size="3x" />
            </FooterSocialMedia>
            <FooterSocialMedia>
              <FontAwesomeIcon icon={faYoutubeSquareProp} size="3x" />
            </FooterSocialMedia>
          </FooterSocialContainer>
        </FooterText>
      </FooterContainer>
    </>
  );
};
