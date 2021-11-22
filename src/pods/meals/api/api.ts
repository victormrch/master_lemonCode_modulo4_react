import { MealsResponse } from './api.model';

export const getMealsByCategory = async (
  category: string
): Promise<MealsResponse> => {
  return fetch(
    `https://api.spoonacular.com/recipes/complexSearch?&number=100&type=${category}&apiKey=412ff64c96be40b58b19054492416c74`
  ).then(r => r.json());
};

getMealsByCategory('brunch').then(console.log);
