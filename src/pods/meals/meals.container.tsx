import React from 'react';
import { getMealsByCategory } from './api';
import { MealsInfo } from './meals.vm';
import { useParams } from 'react-router-dom';
import { mapMealsListToVM } from './meals.mapper';
import { MealsList } from './meals.component';

export const MealsContainer: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [meals, setMeals] = React.useState<MealsInfo[]>(null);

  React.useEffect(() => {
    getMealsByCategory(category)
      .then(mapMealsListToVM)
      .then(setMeals);
  }, []);
  return <>{meals && <MealsList list={meals} />}</>;
};
