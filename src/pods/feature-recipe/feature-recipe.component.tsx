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
import { primaryColor, tertiaryColor } from '../../common-app/theme/app.style';

interface Props {
  list: FeatureRecipe[];
}

function formatRating(rating) {
  return rating / 25;
}

export const FeatureRecipeList: React.FC<Props> = props => {
  const { list } = props;

  return (
    <>
      <FeatureRecipeTitle>Featured Recipes</FeatureRecipeTitle>
      <FeatureRecipeContainer>
        {list.map(item => (
          <FeatureRecipeContainer key={item.id}>
            <RecipeCardContainer>
              <RecipeCardImage src={item.image}></RecipeCardImage>
              <RecipeCardInfo>
                <RecipeCardDishType>{item.dishTypes[0]}</RecipeCardDishType>
                <RecipeCardTitle>{item.title}</RecipeCardTitle>
                <RecipeCardRating>
                  <div>
                    <FontAwesomeIcon icon={faClock} />
                    <RecipeCardMinute>
                      {item.readyInMinutes} mins
                    </RecipeCardMinute>
                  </div>
                  <StarRatingComponent
                    name="star"
                    editing={false}
                    renderStarIcon={() => <FontAwesomeIcon icon={faStar} />}
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
