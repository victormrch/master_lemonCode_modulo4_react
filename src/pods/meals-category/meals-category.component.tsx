import { routes } from 'core/router/routes';
import React from 'react';
import { useHistory } from 'react-router';
import { mealsCategory } from './meals-category.constants';
import {
  MealsCategoryContainer,
  MealsCategoryTitle,
  MealsCategoryImageContainer,
  MealsCategoryImage,
} from './meals-category.style';

import * as assets from '../../assets';

export const MealsCategoryLayout: React.FC = () => {
  const history = useHistory();
  const HandleClick = (category: string) => () => {
    history.push(routes.category(category));
  };

  return (
    <>
      <MealsCategoryContainer>
        <MealsCategoryTitle>What meal do you want to cook…</MealsCategoryTitle>
        <MealsCategoryImageContainer>
          {mealsCategory.map((item, index) => (
            <MealsCategoryImage
              key={index}
              background={`${assets[item.image]}`}
              onClick={HandleClick(item.name)}
            ></MealsCategoryImage>
          ))}
        </MealsCategoryImageContainer>
      </MealsCategoryContainer>
    </>
  );
};
