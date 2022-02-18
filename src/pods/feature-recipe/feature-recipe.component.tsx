import React from 'react';
import { FeatureRecipe } from './feature-recipe.vm';
import {
  FeatureRecipeContainer,
  FeatureRecipeTitle,
  RecipeCardContainer,
  RecipeCardImage,
  RecipeCardInfo,
  RecipeCardRating,
  RecipeCardMinute,
  RecipeCardTitle,
  RecipeCardDishType,
} from './feature-recipe.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faStar } from '@fortawesome/free-solid-svg-icons';
import StarRatingComponent from 'react-star-rating-component';
import { primaryColor, tertiaryColor } from '../../core/theme/app.style';
import { useHistory } from 'react-router';
import { routes } from 'core/router/routes';
import { formatRating } from 'common-app/utils/formatter';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
  list: FeatureRecipe[];
}

export const FeatureRecipeList: React.FC<Props> = props => {
  const { list } = props;
  const history = useHistory();

  const faClockProp = faClock as IconProp;
  const faStarProp = faStar as IconProp;

  const HandleClick = (id: string) => () => {
    history.push(routes.recipe(id));
  };

  return (
    <>
      <FeatureRecipeTitle>Featured Recipes</FeatureRecipeTitle>
      <FeatureRecipeContainer>
        {list.map(item => (
          <FeatureRecipeContainer key={item.id}>
            <RecipeCardContainer>
              <RecipeCardImage
                src={item.image}
                onClick={HandleClick(item.id.toString())}
              ></RecipeCardImage>
              <RecipeCardInfo>
                <RecipeCardDishType>{item.dishTypes[0]}</RecipeCardDishType>
                <RecipeCardTitle>{item.title}</RecipeCardTitle>
                <RecipeCardRating>
                  <div>
                    <FontAwesomeIcon icon={faClockProp} />
                    <RecipeCardMinute>
                      {item.readyInMinutes} mins
                    </RecipeCardMinute>
                  </div>
                  <StarRatingComponent
                    name="star"
                    editing={false}
                    renderStarIcon={() => <FontAwesomeIcon icon={faStarProp} />}
                    starCount={5}
                    starColor={primaryColor}
                    emptyStarColor={tertiaryColor}
                    value={formatRating(item.spoonacularScore)}
                  />
                </RecipeCardRating>
              </RecipeCardInfo>
            </RecipeCardContainer>
          </FeatureRecipeContainer>
        ))}
      </FeatureRecipeContainer>
    </>
  );
};
