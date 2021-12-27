import styled from 'styled-components';
import {
  primaryColor,
  secondaryColor,
  tertiaryColor,
} from '../../core/theme/app.style';

export const DetailRecipeContainer = styled.div``;

export const DetailRecipeInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.85fr;
  margin: 3rem;
`;

export const DetailRecipeInfoImage = styled.img`
  width: 21.875rem;
  height: 21.875rem;
  border-radius: 0.625rem;
  background-size: cover;
  background-position: center center;
  background-image: url(${props => props.background});
  margin: 1.5rem;
`;

export const DetailRecipeInfoTitle = styled.h1`
  color: ${primaryColor};
`;

export const DetailRecipeInfoIconContainer = styled.div`
  display: flex;
  color: ${secondaryColor};
  margin-bottom: -1.25rem;
`;
export const DetailRecipeInfoIconsCard = styled.div`
  display: flex;
  align-items: center;
  margin: 0.625rem;
`;
export const DetailRecipeInfoIcons = styled.span`
  margin-left: 0.625rem;
  font-size: 20px;
`;

export const DetailRecipeSummaryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  margin: 20px 0 -5px;
`;
export const DetailRecipeTitle = styled.h2`
  color: ${primaryColor};
`;
export const DetailRecipeLine = styled.hr`
  background-color: ${primaryColor};
  height: 0.125rem;
  margin-top: -1.25rem;
  margin-bottom: 1.25rem;
`;
export const DetailRecipeInstructionsLine = styled.hr`
  position: absolute;
  background-color: ${primaryColor};
  height: 0.125rem;
  width: 40%;
  margin-top: -1.25rem;
  margin-bottom: 1.25rem;
`;
export const DetailRecipeIngredientsContainer = styled.div`
  margin: 3rem;
`;

export const DetailRecipeIngredients = styled.li`
  list-style: none;
  font-size: 1.25rem;

  :before {
    content: '·';
    font-size: 6.25rem;
    vertical-align: middle;
    line-height: 20px;
    color: ${primaryColor};
  }
`;

export const DetailRecipeInstructionsContainer = styled.div`
  background-color: ${tertiaryColor};
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
`;

export const DetailRecipeInstructionsContent = styled.div`
  margin: 3rem;
`;

export const DetailRecipeRelatedContainer = styled.div`
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  margin: 3rem;
`;
