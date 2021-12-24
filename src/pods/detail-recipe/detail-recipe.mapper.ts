import * as am from './api/api.model';
import * as vm from './detail-recipe.vm';

export const mapDetailRecipeToVM = (
  data: am.DetailRecipeResponse
): vm.DetailRecipeInfo => ({
  id: data.id,
  title: data.title,
  readyInMinutes: data.readyInMinutes,
  servings: data.servings,
  pricePerServing: data.pricePerServing, //Dividirlo entre 100 siempre
  summary: data.summary,
  spoonacularScore: data.spoonacularScore,
  extendedIngredients: data.extendedIngredients,
  instructions: data.instructions,
  image: data.image,
});
