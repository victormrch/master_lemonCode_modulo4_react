import styled from 'styled-components';
import { primaryColor, secondaryColor } from '../../common-app/theme/app.style';

export const FeatureRecipeTitle = styled.h1`
  display: flex;
  justify-content: center;
  color: ${primaryColor};
`;
export const FeatureRecipeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 0.625rem;
`;
export const RecipeCardContainer = styled.div`
  margin: 0.625rem;
  width: 18rem;
`;
export const RecipeCardImage = styled.img`
  width: 18rem;
  height: 12.5rem;
  border-radius: 0.625rem 0.625rem 0 0;
  background-size: cover;
  background-position: center center;
`;

export const RecipeCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 12.5rem;
  margin: 0.125rem 0.625rem;
`;

export const RecipeCardRating = styled.div`
  display: flex;
  margin: 0.125rem;
  justify-content: space-between;
  color: #8c9954;
`;

export const RecipeCardMinute = styled.span`
  margin-left: 0.313rem;
`;

export const RecipeCardTitle = styled.h2`
  height: 5.625rem;
`;

export const RecipeCardDishType = styled.h3`
  color: ${secondaryColor};
`;
