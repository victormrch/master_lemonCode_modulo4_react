import {
  primaryColor,
  secondaryColor,
  tertiaryColor,
} from 'core/theme/app.style';
import styled from 'styled-components';

export const WorldCuisineDetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: ${secondaryColor};
  margin: 1.875rem;
`;

export const WorldCuisineDetailsIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const WorldCuisineDetailsTitle = styled.h1`
  color: ${primaryColor};
  font-size: 2.5rem;
  margin-bottom: 0;
`;
export const WorldCuisineDetailsSubtitle = styled.p`
  width: 75%;
  font-size: 1.25rem;
`;

export const WorldCuisineDetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1.625rem;
  width: 15.563rem;
  height: 17.875rem;
  margin: 1.25rem;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  transition: transform 0.3s;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
    color: ${secondaryColor};
  }
  :active {
    transform: translateY(0.25rem);
  }
`;
export const WorldCuisineDetailsCardImage = styled.img`
  width: 100%;
  height: 11.5rem;
  background-size: cover;
  background-position: center center;
  border-radius: 1.625rem 1.625rem 0 0;
`;
export const WorldCuisineDetailsCardTitle = styled.h3`
  margin: 1.563rem;
`;

export const WorldCuisineDetailsPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.875rem;
`;

export const WorldCuisineDetailsLayoutContainer = styled.div`
  background-color: ${tertiaryColor};
`;
