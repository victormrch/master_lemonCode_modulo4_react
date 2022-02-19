import { apiKeyPrincipal, apiKeySecondary } from 'common/api';
import { DetailRecipeResponse } from './api.model';

export const getDetailRecipe = async (
  id: string
): Promise<DetailRecipeResponse> => {
  return fetch(
    `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKeyPrincipal}`
  ).then(r => r.json());
};
