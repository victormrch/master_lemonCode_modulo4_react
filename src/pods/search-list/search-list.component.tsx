import React from 'react';
import {
  SearchCard,
  SearchCardImage,
  SearchCardTitle,
  SearchContainer,
  SearchIntroduction,
  SearchTitle,
} from './search-list.style';
import { SearchInfo } from './search-list.vm';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import { routes } from 'core/router/routes';
import { capitalizeFirstLetter } from 'common-app/utils/capitalizeWord';

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
  return (
    <>
      <SearchIntroduction>
        <SearchTitle> Results of {capitalizeFirstLetter(id)}: </SearchTitle>
      </SearchIntroduction>
      <SearchContainer>
        {list.map(item => (
          <SearchCard key={item.id} onClick={HandleClick(item.id.toString())}>
            <SearchCardImage src={item.image} alt="" />
            <SearchCardTitle>{item.title}</SearchCardTitle>
          </SearchCard>
        ))}
      </SearchContainer>
    </>
  );
};
