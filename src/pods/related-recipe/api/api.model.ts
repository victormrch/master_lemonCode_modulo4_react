export interface RelatedRecipe {
  id: number;
  imageType: string;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
}

export type RelatedRecipeResponse = Array<RelatedRecipe>;
