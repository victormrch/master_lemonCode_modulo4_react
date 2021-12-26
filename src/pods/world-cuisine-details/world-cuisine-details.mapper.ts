import * as am from './api/api.model';
import * as vm from './world-cuisine-details.vm';

export const mapWorldCuisineDetailsToVM = (
  data: am.WorldCuisineDetail
): vm.WorldCuisineDetailsInfo => ({
  id: data.id,
  title: data.title,
  image: data.image,
});

export const mapMWorldCuisineDetailsListToVM = (
  data: am.WorldCuisineDetailsResponse
): vm.WorldCuisineDetailsInfo[] => data.results.map(mapWorldCuisineDetailsToVM);
