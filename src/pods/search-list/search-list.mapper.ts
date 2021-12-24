import * as am from './api/api.model';
import * as vm from './search-list.vm';

export const mapSearchToVM = (data: am.Recipe): vm.SearchInfo => ({
  id: data.id,
  title: data.title,
  image: data.image,
});

export const mapSearchListToVM = (data: am.SearchResponse): vm.SearchInfo[] =>
  data.results.map(mapSearchToVM);
