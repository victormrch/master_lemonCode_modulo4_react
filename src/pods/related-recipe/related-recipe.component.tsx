import React from 'react';
import {
  RelatedRecipeCardContainer,
  RelatedRecipeCardImage,
  RelatedRecipeCardInfo,
  RelatedRecipeCardRating,
  RelatedRecipeCardTitle,
  RelatedRecipeContainer,
  RelatedRecipeCardMinute,
} from './related-recipe.style';
import { RelatedRecipe } from './related-recipe.vm';
import { useHistory } from 'react-router';
import { routes } from 'core/router/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { ListItem, Pagination } from '@mui/material';

interface Props {
  list: RelatedRecipe[];
}

function getImage(id: number) {
  return `https://spoonacular.com/recipeImages/${id}-556x370.jpg`;
}

export const RelatedRecipeList: React.FC<Props> = props => {
  const { list } = props;

  const history = useHistory();

  const count = Math.ceil(list.length / 3);

  const HandleClick = (id: string) => () => {
    history.push(routes.recipe(id));
  };

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <>
      <RelatedRecipeContainer>
        {list.map(item => (
          <RelatedRecipeCardContainer key={item.id}>
            <RelatedRecipeCardImage
              src={getImage(item.id)}
              onClick={HandleClick(item.id.toString())}
            ></RelatedRecipeCardImage>
            <RelatedRecipeCardInfo>
              <RelatedRecipeCardTitle>{item.title}</RelatedRecipeCardTitle>
              <RelatedRecipeCardRating>
                <div>
                  <FontAwesomeIcon icon={faClock} />
                  <RelatedRecipeCardMinute>
                    {item.readyInMinutes} mins
                  </RelatedRecipeCardMinute>
                </div>
                <div>
                  <FontAwesomeIcon icon={faUtensils} />
                  <RelatedRecipeCardMinute>
                    {item.servings} servings
                  </RelatedRecipeCardMinute>
                </div>
              </RelatedRecipeCardRating>
            </RelatedRecipeCardInfo>
          </RelatedRecipeCardContainer>
        ))}
        <Pagination count={count} page={page} onChange={handleChange} />
      </RelatedRecipeContainer>
    </>
  );
};
