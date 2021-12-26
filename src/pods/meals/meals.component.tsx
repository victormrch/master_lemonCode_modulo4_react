import { MealsCategoryLayout } from 'pods/meals-category/meals-category.component';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMealsDescription } from './meals.business';
import { DESCRIPTIONS } from './meals.constants';
import {
  MealsCard,
  MealsCardImage,
  MealsCardTitle,
  MealsContainer,
  MealsIntroduction,
  MealsPaginationContainer,
  MealsSubtitle,
  MealsTitle,
} from './meals.style';
import { MealsInfo } from './meals.vm';
import { useHistory } from 'react-router';
import { routes } from 'core/router/routes';
import { Pagination } from '@mui/material';
import usePagination from 'common-app/utils/pagination';

interface Props {
  list: MealsInfo[];
}

export const MealsList: React.FC<Props> = props => {
  const { list } = props;
  const { id } = useParams<{ id: keyof typeof DESCRIPTIONS }>();

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
      <MealsIntroduction>
        <MealsTitle>{getMealsDescription(id).name} Recipe</MealsTitle>
        <MealsSubtitle>{getMealsDescription(id).description}</MealsSubtitle>
      </MealsIntroduction>
      <MealsContainer>
        {_DATA.currentData().map(item => (
          <MealsCard key={item.id} onClick={HandleClick(item.id.toString())}>
            <MealsCardImage src={item.image} alt="" />
            <MealsCardTitle>{item.title}</MealsCardTitle>
          </MealsCard>
        ))}
      </MealsContainer>
      <MealsPaginationContainer>
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
      </MealsPaginationContainer>
      <MealsCategoryLayout />
    </>
  );
};
