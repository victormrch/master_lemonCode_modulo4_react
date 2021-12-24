import styled from 'styled-components';
import { primaryColor, secondaryColor } from '../../core/theme/app.style';

export const WorldCuisineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${primaryColor};
`;

export const WorldCuisineTitle = styled.h1`
  margin-top: 2.875rem;
`;

export const WorldCuisineText = styled.h3`
  color: ${secondaryColor};
  margin-top: 3rem;
  margin-bottom: 3.875rem;
`;

export const WorldCuisineCountries = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const WorldCuisineCountryContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1.25rem;
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

export const WorldCuisineFlagName = styled.h4`
  text-align: right;
  width: 3.75rem;
  margin-right: 1.313rem;
`;

export const WorldCuisineFlagImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  background-size: cover;
  background-position: center center;
  border: 0.125rem solid ${primaryColor};
  border-radius: 1.875rem;
  background-image: url(${props => props.background});
`;
