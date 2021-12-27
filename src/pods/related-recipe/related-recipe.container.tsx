import React from 'react';
import { getDetailRecipe } from './api';
import { RelatedRecipeList } from './related-recipe.component';
import { mapRelatedRecipeListToVM } from './related-recipe.mapper';
import { RelatedRecipe } from './related-recipe.vm';

interface Props {
  id: number;
}

export const RelatedRecipeContainer: React.FC<Props> = props => {
  const { id } = props;
  const [list, setList] = React.useState<RelatedRecipe[]>([]);

  React.useEffect(() => {
    getDetailRecipe(id)
      .then(mapRelatedRecipeListToVM)
      .then(setList);
  }, [id]);

  return <RelatedRecipeList list={list} />;
};
