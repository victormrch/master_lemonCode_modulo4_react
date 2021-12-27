import React, { useState } from 'react';
import {
  SearchCard,
  SearchCardImage,
  SearchCardTitle,
  SearchContainer,
  SearchIntroduction,
  SearchPaginationContainer,
  SearchTitle,
} from './search-list.style';
import { SearchInfo } from './search-list.vm';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import { routes } from 'core/router/routes';
import { capitalizeFirstLetter } from 'common-app/utils/capitalizeWord';
import { Pagination } from '@mui/material';
import usePagination from 'common-app/utils/pagination';

interface Props {
  list: SearchInfo[];
}

export const SearchList: React.FC<Props> = props => {
  const { list } = props;
  const { id } = useParams<{ id: string }>();

  const history = useHistory();
  const HandleClick = (id: string) => () => {
    history.push(routes.recipe(id));
  };

  const [page, setPage] = useState(1);
  const PER_PAGE = 8;
  const count = Math.ceil(list.length / PER_PAGE);
  const _DATA = usePagination(list, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <>
      <SearchIntroduction>
        <SearchTitle> Results of {capitalizeFirstLetter(id)}: </SearchTitle>
      </SearchIntroduction>
      <SearchContainer>
        {_DATA.currentData().map(item => (
          <SearchCard key={item.id} onClick={HandleClick(item.id.toString())}>
            <SearchCardImage src={item.image} alt="" />
            <SearchCardTitle>{item.title}</SearchCardTitle>
          </SearchCard>
        ))}
      </SearchContainer>
      <SearchPaginationContainer>
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          color="standard"
          showFirstButton
          showLastButton
          onChange={handleChange}
        />
      </SearchPaginationContainer>
    </>
  );
};
