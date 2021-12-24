export interface DetailRecipeInfo {
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  pricePerServing: string;
  summary: string;
  spoonacularScore: number;
  extendedIngredients: [
    {
      id: number;
      nameClean: string;
      amount: number;
      unit: string;
    }
  ];
  instructions: string;
  image: string;
}
