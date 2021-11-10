import styled from 'styled-components';

const primaryColor = '#4F6228';
const secondaryColor = '#8C9954';
const tertiaryColor = '#E8EAC9';

export const FeatureRecipeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const RecipeCardContainer = styled.div`
  margin: 10px;
  width: 288px;
`;
export const RecipeCardImage = styled.img`
  width: 288px;
  height: 200px;
  border-radius: 10px 10px 0 0;
  background-size: cover;
  background-position: center center;
`;

export const RecipeCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 200px;
  margin: 2px 10px;
`;

export const RecipeCardRating = styled.div`
  display: flex;
  margin: 2px;
  justify-content: space-between;
  color: #8c9954;
`;

export const RecipeCardMinute = styled.span`
  margin-left: 5px;
`;

export const RecipeCardTitle = styled.h2`
  height: 90px;
`;

export const RecipeCardDishType = styled.h3`
  color: ${secondaryColor};
`;
