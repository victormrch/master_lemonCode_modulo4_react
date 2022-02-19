import { apiKeyPrincipal, apiKeySecondary } from 'common/api';
import { WorldCuisineDetailsResponse } from './api.model';

export const getWorldCuisineDetailsByCountry = async (
  country: string
): Promise<WorldCuisineDetailsResponse> => {
  return fetch(
    `https://api.spoonacular.com/recipes/complexSearch?&number=100&cuisine=${country}&apiKey=${apiKeyPrincipal}`
  ).then(r => r.json());
};
