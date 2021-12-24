import { apiKeySecondary } from 'common/api';
import { SearchResponse } from './api.model';

export const getRecipesBySearch = async (
  search: string
): Promise<SearchResponse> => {
  return fetch(
    `https://api.spoonacular.com/recipes/complexSearch?query=${search}&number=10&apiKey=${apiKeySecondary}`
  ).then(r => r.json());
};
