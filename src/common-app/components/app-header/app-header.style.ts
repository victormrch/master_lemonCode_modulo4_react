import { primaryColor, secondaryColor, whiteColor } from 'core/theme/app.style';
import styled from 'styled-components';

export const AppHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6rem;
  width: 100%;
  background-image: url(../src/assets/img/app_header.png);
  background-size: cover;
  background-position: center center;
`;
export const AppHeaderLeft = styled.div`
  width: 15%;
`;
export const AppHeaderCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
`;
export const AppHeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 2%;
  width: 15%;
`;
export const AppHeaderImage = styled.div`
  background-image: url(../src/assets/img/mono_home.png);
  width: 4.5rem;
  height: 4.5rem;
  background-size: cover;
  background-position: center center;
`;

export const AppHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AppHeaderMainTitle = styled.h1`
  width: 100%;
  font-size: 1.5rem;
  margin: 0;
  color: ${primaryColor};
`;

export const AppHeaderSecondaryTitle = styled.h3`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 1.5rem;
  margin: 0rem;
  color: ${secondaryColor};
`;

export const AppHeaderIconMedia = styled.div`
  color: ${whiteColor};
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

  @media (max-width: 768px) {
    color: ${secondaryColor};
  }
`;

export const AppHeaderModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AppHeaderModalTitle = styled.h2`
  color: ${primaryColor};
`;
