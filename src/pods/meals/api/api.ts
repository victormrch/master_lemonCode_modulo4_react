import { apiKeyPrincipal, apiKeySecondary } from 'common/api';
import { MealsResponse } from './api.model';

export const getMealsByCategory = async (
  category: string
): Promise<MealsResponse> => {
  return fetch(
    `https://api.spoonacular.com/recipes/complexSearch?&number=10&type=${category}&apiKey=${apiKeyPrincipal}`
  ).then(r => r.json());
};
