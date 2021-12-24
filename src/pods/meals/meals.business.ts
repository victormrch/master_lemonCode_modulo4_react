import { DESCRIPTIONS } from './meals.constants';

export const getMealsDescription = (meal: keyof typeof DESCRIPTIONS) => {
  return DESCRIPTIONS[meal];
};
