import React from 'react';
import { FeatureRecipe } from './feature-recipe.vm';
import {
  FeatureRecipeContainer,
  RecipeCardContainer,
  RecipeCardImage,
  RecipeCardInfo,
  RecipeCardRating,
  RecipeCardMinute,
  RecipeCardTitle,
  RecipeCardDishType,
} from './feature-recipe.style';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faStar } from '@fortawesome/free-solid-svg-icons';
import StarRatingComponent from 'react-star-rating-component';

interface Props {
  list: FeatureRecipe[];
}

function formatRating(rating) {
  return rating / 25;
}

export const FeatureRecipeList: React.FC<Props> = props => {
  const { list } = props;

  const primaryColor = '#4F6228';
  const secondaryColor = '#8C9954';
  const tertiaryColor = '#E8EAC9';

  return (
    <>
      <Typography variant="h4" align="center" color={primaryColor}>
        Featured Recipes
      </Typography>
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
