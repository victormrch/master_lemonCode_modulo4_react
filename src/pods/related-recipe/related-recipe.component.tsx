import React, { useState } from 'react';
import {
  RelatedRecipeCardContainer,
  RelatedRecipeCardImage,
  RelatedRecipeCardInfo,
  RelatedRecipeCardRating,
  RelatedRecipeCardTitle,
  RelatedRecipeContainer,
  RelatedRecipeCardMinute,
  RelatedRecipePaginationContainer,
} from './related-recipe.style';
import { RelatedRecipe } from './related-recipe.vm';
import { useHistory } from 'react-router';
import { routes } from 'core/router/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { Pagination } from '@mui/material';
import usePagination from 'common-app/utils/pagination';
import { getImage } from 'common-app/utils/getRecipeImage';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
  list: RelatedRecipe[];
}

export const RelatedRecipeList: React.FC<Props> = props => {
  const { list } = props;

  const history = useHistory();

  const HandleClick = (id: string) => () => {
    history.push(routes.recipe(id));
  };

  const [page, setPage] = useState(1);
  const PER_PAGE = 3;
  const count = Math.ceil(list.length / PER_PAGE);
  const _DATA = usePagination(list, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const faClockProp = faClock as IconProp;
  const faUtensilsProp = faUtensils as IconProp;

  return (
    <>
      <RelatedRecipeContainer>
        {_DATA.currentData().map(item => (
          <RelatedRecipeCardContainer key={item.id}>
            <RelatedRecipeCardImage
              src={getImage(item.id)}
              onClick={HandleClick(item.id.toString())}
            ></RelatedRecipeCardImage>
            <RelatedRecipeCardInfo>
              <RelatedRecipeCardTitle>{item.title}</RelatedRecipeCardTitle>
              <RelatedRecipeCardRating>
                <div>
                  <FontAwesomeIcon icon={faClockProp} />
                  <RelatedRecipeCardMinute>
                    {item.readyInMinutes} mins
                  </RelatedRecipeCardMinute>
                </div>
                <div>
                  <FontAwesomeIcon icon={faUtensilsProp} />
                  <RelatedRecipeCardMinute>
                    {item.servings} servings
                  </RelatedRecipeCardMinute>
                </div>
              </RelatedRecipeCardRating>
            </RelatedRecipeCardInfo>
          </RelatedRecipeCardContainer>
        ))}
      </RelatedRecipeContainer>
      <RelatedRecipePaginationContainer>
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
      </RelatedRecipePaginationContainer>
    </>
  );
};
