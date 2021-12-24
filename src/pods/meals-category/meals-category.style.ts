import styled from 'styled-components';
import { tertiaryColor, secondaryColor } from '../../core/theme/app.style';

export const MealsCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${secondaryColor};
  background-color: ${tertiaryColor};
`;

export const MealsCategoryTitle = styled.h2`
  margin-top: 2.875rem;
`;
export const MealsCategoryImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 2.875rem;
`;
export const MealsCategoryImage = styled.img`
  display: flex;
  flex-wrap: wrap;
  width: 12.5rem;
  height: 12.5rem;
  margin: 10px;
  background-size: cover;
  background-position: center center;
  background-image: url(${props => props.background});
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
