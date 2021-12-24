import { apiKeySecondary } from 'common/api';
import { FeatureRecipeResponse } from './api.model';

export const getFeatureRecipe = async (): Promise<FeatureRecipeResponse> => {
  return fetch(
    `https://api.spoonacular.com/recipes/random?number=4&apiKey=${apiKeySecondary}`
  ).then(r => r.json());
};

getFeatureRecipe().then(console.log);
