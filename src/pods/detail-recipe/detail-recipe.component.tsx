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
import { formatRating, formatUnit } from 'common-app/utils/formatter';
import { getCostPerServing } from 'common-app/utils/getCost';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
  recipe: DetailRecipeInfo;
}

export const DetailRecipeList: React.FC<Props> = props => {
  const { recipe } = props;

  const faClockProp = faClock as IconProp;
  const faUtensilsProp = faUtensils as IconProp;
  const faDollarSignProp = faDollarSign as IconProp;
  const faStarProp = faStar as IconProp;

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
                  <FontAwesomeIcon icon={faClockProp} size="2x" />
                  <DetailRecipeInfoIcons>
                    {recipe.readyInMinutes} mins
                  </DetailRecipeInfoIcons>
                </DetailRecipeInfoIconsCard>
                <DetailRecipeInfoIconsCard>
                  <FontAwesomeIcon icon={faUtensilsProp} size="2x" />
                  <DetailRecipeInfoIcons>
                    {recipe.servings} servings
                  </DetailRecipeInfoIcons>
                </DetailRecipeInfoIconsCard>
                <DetailRecipeInfoIconsCard>
                  <FontAwesomeIcon icon={faDollarSignProp} size="2x" />
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
                  renderStarIcon={() => <FontAwesomeIcon icon={faStarProp} />}
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
