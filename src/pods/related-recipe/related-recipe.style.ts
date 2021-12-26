import { primaryColor, secondaryColor } from 'core/theme/app.style';
import styled from 'styled-components';

export const RelatedRecipeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 0.938rem;
`;

export const RelatedRecipeCardContainer = styled.div`
  margin: 0.625rem;
  width: 18rem;
  border-radius: 0.625rem 0.625rem 0 0;
  box-shadow: rgb(50 50 93 / 25%) 0px 6px 12px -2px,
    rgb(0 0 0 / 30%) 0px 3px 7px -3px;
  transition: transform 0.3s;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
    color: ${secondaryColor};
  }

  :active {
    transform: translateY(4px);
  }
`;

export const RelatedRecipeCardImage = styled.img`
  width: 18rem;
  height: 12.5rem;
  border-radius: 0.625rem 0.625rem 0 0;
  background-size: cover;
  background-position: center center;
`;

export const RelatedRecipeCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 12.5rem;
  margin: 0.125rem 0.625rem;
`;

export const RelatedRecipeCardRating = styled.div`
  display: flex;
  margin: 0.125rem;
  justify-content: space-between;
  color: #8c9954;
`;

export const RelatedRecipeCardMinute = styled.span`
  margin-left: 0.313rem;
`;

export const RelatedRecipeCardTitle = styled.h2`
  height: 5.625rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
