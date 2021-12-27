export interface WorldCuisineDetailsResponse {
  results: WorldCuisineDetail[];
  offset: number;
  number: number;
  totalResults: number;
}
export interface WorldCuisineDetail {
  id: number;
  title: string;
  image: string;
  imageType: string;
}
