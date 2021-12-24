import { apiKeySecondary } from 'common/api';
import { MealsResponse } from './api.model';

export const getMealsByCategory = async (
  category: string
): Promise<MealsResponse> => {
  return fetch(
    `https://api.spoonacular.com/recipes/complexSearch?&number=10&type=${category}&apiKey=${apiKeySecondary}`
  ).then(r => r.json());
};
