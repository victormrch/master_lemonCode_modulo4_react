import React from 'react';
import { getRecipesBySearch } from './api';
import { mapSearchListToVM } from './search-list.mapper';
import { SearchList } from './search-list.component';
import { SearchInfo } from './search-list.vm';

interface Props {
  search: string;
}

export const SearchListContainer: React.FC<Props> = props => {
  const { search } = props;

  const [searchList, setSearchList] = React.useState<SearchInfo[]>(null);

  React.useEffect(() => {
    getRecipesBySearch(search)
      .then(mapSearchListToVM)
      .then(setSearchList);
  }, [search]);

  return <>{searchList && <SearchList list={searchList} />}</>;
};
