import { routes } from 'core/router/routes';
import React from 'react';
import { useHistory } from 'react-router';
import {
  MealsCategoryContainer,
  MealsCategoryTitle,
  MealsCategoryImageContainer,
  MealsCategoryImage,
} from './meals-category.style';

export const MealsCategoryLayout: React.FC = () => {
  const mealsCategory = [
    { name: 'breakfast', image: 'breakfast_category.png' },
    { name: 'lunch', image: 'lunch_category.png' },
    { name: 'dinner', image: 'dinner_category.png' },
    { name: 'dessert', image: 'dessert_category.png' },
    { name: 'drinks', image: 'drinks_category.png' },
  ];

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
              background={`../src/assets/img/meals/${item.image}`}
              onClick={HandleClick(item.name)}
            ></MealsCategoryImage>
          ))}
        </MealsCategoryImageContainer>
      </MealsCategoryContainer>
    </>
  );
};
