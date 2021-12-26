import * as am from './api/api.model';
import * as vm from './related-recipe.vm';

const mapRelatedRecipeToVM = (data: am.RelatedRecipe): vm.RelatedRecipe => ({
  id: data.id,
  title: data.title,
  readyInMinutes: data.readyInMinutes,
  servings: data.servings,
});

export const mapRelatedRecipeListToVM = (
  data: am.RelatedRecipeResponse
): vm.RelatedRecipe[] => data.map(mapRelatedRecipeToVM);
