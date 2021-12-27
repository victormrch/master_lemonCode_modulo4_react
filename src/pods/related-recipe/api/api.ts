import { apiKeyPrincipal, apiKeySecondary } from 'common/api';
import { RelatedRecipeResponse } from './api.model';

export const getDetailRecipe = async (
  id: number
): Promise<RelatedRecipeResponse> => {
  return fetch(
    `https://api.spoonacular.com/recipes/${id}/similar?apiKey=${apiKeySecondary}`
  ).then(r => r.json());
};
