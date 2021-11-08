import * as am from './api/api.model';
import * as vm from './feature-recipe.vm';

const mapFeatureRecipeToVM = (data: am.FeatureRecipe): vm.FeatureRecipe => ({
  id: data.id,
  dishTypes: data.dishTypes,
  image: data.image,
  readyInMinutes: data.readyInMinutes,
  spoonacularScore: data.spoonacularScore,
  title: data.title,
});

export const mapFeatureRecipeListToVM = (
  data: am.FeatureRecipeResponse
): vm.FeatureRecipe[] => data.recipes.map(mapFeatureRecipeToVM);
