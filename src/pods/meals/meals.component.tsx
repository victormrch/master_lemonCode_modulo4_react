import { MealsCategoryLayout } from 'pods/meals-category/meals-category.component';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getMealsDescription } from './meals.business';
import { DESCRIPTIONS } from './meals.constants';
import {
  MealsCard,
  MealsCardImage,
  MealsCardTitle,
  MealsContainer,
  MealsIntroduction,
  MealsSubtitle,
  MealsTitle,
} from './meals.style';
import { MealsInfo } from './meals.vm';
import { useHistory } from 'react-router';
import { routes } from 'core/router/routes';

interface Props {
  list: MealsInfo[];
}

export const MealsList: React.FC<Props> = props => {
  const { list } = props;
  const { id } = useParams<{ id: keyof typeof DESCRIPTIONS }>();

  const history = useHistory();
  const HandleClick = (id: string) => () => {
    history.push(routes.recipe(id));
  };
  return (
    <>
      <MealsIntroduction>
        <MealsTitle>{getMealsDescription(id).name} Recipe</MealsTitle>
        <MealsSubtitle>{getMealsDescription(id).description}</MealsSubtitle>
      </MealsIntroduction>
      <MealsContainer>
        {list.map(item => (
          <MealsCard key={item.id} onClick={HandleClick(item.id.toString())}>
            <MealsCardImage src={item.image} alt="" />
            <MealsCardTitle>{item.title}</MealsCardTitle>
          </MealsCard>
        ))}
      </MealsContainer>
      <MealsCategoryLayout />
    </>
  );
};
