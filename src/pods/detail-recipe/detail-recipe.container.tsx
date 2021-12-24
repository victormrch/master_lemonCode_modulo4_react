import React from 'react';
import { getDetailRecipe } from './api';
import { DetailRecipeList } from './detail-recipe.component';
import { mapDetailRecipeToVM } from './detail-recipe.mapper';
import { DetailRecipeInfo } from './detail-recipe.vm';

interface Props {
  id: string;
}
export const DetailRecipeContainer: React.FC<Props> = props => {
  const { id } = props;
  const [recipe, setRecipe] = React.useState<DetailRecipeInfo>(null);

  React.useEffect(() => {
    getDetailRecipe(id)
      .then(mapDetailRecipeToVM)
      .then(setRecipe);
  }, [id]);

  return <DetailRecipeList recipe={recipe} />;
};
