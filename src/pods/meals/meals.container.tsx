import React from 'react';
import { getMealsByCategory } from './api';
import { MealsInfo } from './meals.vm';
import { mapMealsListToVM } from './meals.mapper';
import { MealsList } from './meals.component';

interface Props {
  category: string;
}
export const MealsContainer: React.FC<Props> = props => {
  const { category } = props;

  const [meals, setMeals] = React.useState<MealsInfo[]>(null);

  React.useEffect(() => {
    getMealsByCategory(category)
      .then(mapMealsListToVM)
      .then(setMeals);
  }, [category]);

  return <>{meals && <MealsList list={meals} />}</>;
};
