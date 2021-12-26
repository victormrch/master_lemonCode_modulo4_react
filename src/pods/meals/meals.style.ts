import { primaryColor, secondaryColor } from 'core/theme/app.style';
import styled from 'styled-components';

export const MealsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: ${secondaryColor};
  margin: 30px;
`;

export const MealsIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MealsTitle = styled.h1`
  color: ${primaryColor};
  font-size: 40px;
  margin-bottom: 0;
`;
export const MealsSubtitle = styled.p`
  width: 75%;
  font-size: 20px;
`;

export const MealsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1.625rem;
  width: 249px;
  height: 286px;
  margin: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
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
export const MealsCardImage = styled.img`
  width: 100%;
  height: 184px;
  background-size: cover;
  background-position: center center;
  border-radius: 1.625rem 1.625rem 0 0;
`;
export const MealsCardTitle = styled.h3`
  margin: 25px;
`;

export const MealsPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.875rem;
`;
