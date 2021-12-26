import React from 'react';
import { DetailRecipeInfo } from './detail-recipe.vm';
import { Markup } from 'interweave';
import {
  DetailRecipeContainer,
  DetailRecipeInfoContainer,
  DetailRecipeInfoIconContainer,
  DetailRecipeInfoIcons,
  DetailRecipeInfoIconsCard,
  DetailRecipeInfoImage,
  DetailRecipeInfoTitle,
  DetailRecipeIngredients,
  DetailRecipeIngredientsContainer,
  DetailRecipeInstructionsContainer,
  DetailRecipeInstructionsContent,
  DetailRecipeInstructionsLine,
  DetailRecipeLine,
  DetailRecipeRelatedContainer,
  DetailRecipeSummaryContainer,
  DetailRecipeTitle,
} from './detail-recipe.style';
import StarRatingComponent from 'react-star-rating-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faUtensils,
  faDollarSign,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { primaryColor, tertiaryColor } from 'core/theme/app.style';
import { RelatedRecipeContainer } from 'pods/related-recipe';

interface Props {
  recipe: DetailRecipeInfo;
}

function getCostPerServing(cost) {
  return (cost / 100).toFixed(2);
}

function formatRating(rating) {
  return rating / 25;
}

function formatUnit(unit: number) {
  const isInteger = Number.isInteger(unit);
  if (isInteger) return unit;
  return unit.toFixed(2);
}

export const DetailRecipeList: React.FC<Props> = props => {
  const { recipe } = props;
  console.log(recipe);

  return (
    <>
      {recipe && (
        <DetailRecipeContainer>
          <DetailRecipeInfoContainer>
            <DetailRecipeInfoImage
              background={recipe.image}
            ></DetailRecipeInfoImage>
            <div>
              <DetailRecipeInfoTitle>{recipe.title}</DetailRecipeInfoTitle>
              <DetailRecipeInfoIconContainer>
                <DetailRecipeInfoIconsCard>
                  <FontAwesomeIcon icon={faClock} size="2x" />
                  <DetailRecipeInfoIcons>
                    {recipe.readyInMinutes} mins
                  </DetailRecipeInfoIcons>
                </DetailRecipeInfoIconsCard>
                <DetailRecipeInfoIconsCard>
                  <FontAwesomeIcon icon={faUtensils} size="2x" />
                  <DetailRecipeInfoIcons>
                    {recipe.servings} servings
                  </DetailRecipeInfoIcons>
                </DetailRecipeInfoIconsCard>
                <DetailRecipeInfoIconsCard>
                  <FontAwesomeIcon icon={faDollarSign} size="2x" />
                  <DetailRecipeInfoIcons>
                    {getCostPerServing(recipe.pricePerServing)} Per Serving
                  </DetailRecipeInfoIcons>
                </DetailRecipeInfoIconsCard>
              </DetailRecipeInfoIconContainer>
              <DetailRecipeSummaryContainer>
                <DetailRecipeTitle>Summary</DetailRecipeTitle>
                <StarRatingComponent
                  name="star"
                  editing={false}
                  renderStarIcon={() => <FontAwesomeIcon icon={faStar} />}
                  starCount={5}
                  starColor={primaryColor}
                  emptyStarColor={tertiaryColor}
                  value={formatRating(recipe.spoonacularScore)}
                />
              </DetailRecipeSummaryContainer>
              <DetailRecipeLine />
              <Markup content={recipe.summary} />
            </div>
          </DetailRecipeInfoContainer>
          <DetailRecipeIngredientsContainer>
            <DetailRecipeTitle>Ingredients</DetailRecipeTitle>
            <DetailRecipeInstructionsLine />
            <ul>
              {recipe.extendedIngredients.map((item, index) => (
                <DetailRecipeIngredients key={index}>
                  {formatUnit(item.amount)} {item.unit} {item.nameClean}
                </DetailRecipeIngredients>
              ))}
            </ul>
          </DetailRecipeIngredientsContainer>
          <DetailRecipeInstructionsContainer>
            <DetailRecipeInstructionsContent>
              <DetailRecipeTitle>Instructions</DetailRecipeTitle>
              <DetailRecipeInstructionsLine />
              <div>
                <Markup content={recipe.instructions} />
              </div>
            </DetailRecipeInstructionsContent>
          </DetailRecipeInstructionsContainer>
          <DetailRecipeRelatedContainer>
            <DetailRecipeTitle>Related Recipe</DetailRecipeTitle>
            <DetailRecipeInstructionsLine />
            <RelatedRecipeContainer id={recipe.id} />
          </DetailRecipeRelatedContainer>
        </DetailRecipeContainer>
      )}
    </>
  );
};
