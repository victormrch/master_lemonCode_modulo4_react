import React, { useState } from 'react';
import { WorldCuisineDetailsInfo } from './world-cuisine-details.vm';
import { useHistory } from 'react-router';
import { routes } from 'core/router/routes';
import { useParams } from 'react-router-dom';
import { COUNTRIES } from './world-cuisine-details.constants';
import { getCountriesDescription } from './world-cuisine-details.business';
import {
  WorldCuisineDetailsCard,
  WorldCuisineDetailsCardImage,
  WorldCuisineDetailsCardTitle,
  WorldCuisineDetailsContainer,
  WorldCuisineDetailsIntroduction,
  WorldCuisineDetailsLayoutContainer,
  WorldCuisineDetailsPaginationContainer,
  WorldCuisineDetailsTitle,
} from './world-cuisine-details.style';
import { WorldCuisineLayout } from 'pods/world-cuisine/world-cuisine.component';
import { Pagination } from '@mui/material';
import usePagination from 'common-app/utils/pagination';

interface Props {
  list: WorldCuisineDetailsInfo[];
}

export const WorldCuisineDetailsList: React.FC<Props> = props => {
  const { list } = props;
  const { id } = useParams<{ id: keyof typeof COUNTRIES }>();

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
      <WorldCuisineDetailsIntroduction>
        <WorldCuisineDetailsTitle>
          {getCountriesDescription(id).name} Recipe
        </WorldCuisineDetailsTitle>
      </WorldCuisineDetailsIntroduction>
      <WorldCuisineDetailsContainer>
        {_DATA.currentData().map(item => (
          <WorldCuisineDetailsCard
            key={item.id}
            onClick={HandleClick(item.id.toString())}
          >
            <WorldCuisineDetailsCardImage src={item.image} alt="" />
            <WorldCuisineDetailsCardTitle>
              {item.title}
            </WorldCuisineDetailsCardTitle>
          </WorldCuisineDetailsCard>
        ))}
      </WorldCuisineDetailsContainer>
      <WorldCuisineDetailsPaginationContainer>
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
      </WorldCuisineDetailsPaginationContainer>
      <WorldCuisineDetailsLayoutContainer>
        <WorldCuisineLayout />
      </WorldCuisineDetailsLayoutContainer>
    </>
  );
};
