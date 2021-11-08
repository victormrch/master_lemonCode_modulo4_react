import React from 'react';
import { FeatureRecipe } from './feature-recipe.vm';
import { FeatureRecipeList } from './feature-recipe.component';
import { getFeatureRecipe } from './api';
import { mapFeatureRecipeListToVM } from './feature-recipe.mapper';

export const FeatureRecipeContainer: React.FC = () => {
  const [list, setList] = React.useState<FeatureRecipe[]>([]);

  React.useEffect(() => {
    getFeatureRecipe()
      .then(mapFeatureRecipeListToVM)
      .then(setList);
  }, []);

  return <FeatureRecipeList list={list} />;
};
