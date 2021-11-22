import * as am from './api/api.model';
import * as vm from './meals.vm';

export const mapMealsToVM = (data: am.Meals): vm.MealsInfo => ({
  id: data.id,
  title: data.title,
  image: data.image,
});

export const mapMealsListToVM = (data: am.MealsResponse): vm.MealsInfo[] =>
  data.results.map(mapMealsToVM);
