export interface FeatureRecipeResponse {
  recipes: FeatureRecipe[];
}
export interface FeatureRecipe {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  lowFodmap: boolean;
  aggregateLikes: number;
  spoonacularScore: number;
  healthScore: number;
  creditsText: string;
  license: string;
  sourceName: string;
  pricePerServing: string;
  extendedIngredients: [];
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image: string;
  imageType: string;
  summary: string;
  cuisines: [];
  dishTypes: string[];
  diets: string[];
  occasions: string[];
  instructions: string;
  analyzedInstructions: [
    {
      name: string;
      steps: [
        {
          number: number;
          step: string;
          ingredients: [
            {
              id: number;
              name: string;
              localizedName: string;
              image: string;
            }
          ];
        }
      ];
    }
  ];
  originalId: null;
  spoonacularSourceUrl: string;
}
