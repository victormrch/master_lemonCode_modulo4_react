export interface MealsResponse {
  results: Meals[];
  offset: number;
  number: number;
  totalResults: number;
}
export interface Meals {
  id: number;
  title: string;
  image: string;
  imageType: string;
}
