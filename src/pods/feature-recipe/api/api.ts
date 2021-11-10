import { FeatureRecipeResponse } from './api.model';

export const getFeatureRecipe = async (): Promise<FeatureRecipeResponse> => {
  return fetch(
    'https://api.spoonacular.com/recipes/random?number=4&tags=side%20dish,main%20dish,%20main%20course&apiKey=412ff64c96be40b58b19054492416c74'
  ).then(r => r.json());
};

getFeatureRecipe().then(console.log);
