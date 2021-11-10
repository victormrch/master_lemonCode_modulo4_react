import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CategoryScene, HomeScene, RecipeScene, ResultsScene } from 'scenes';

export const AppRouter: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact={true} path={[switchRoutes.category]}>
          <CategoryScene />
        </Route>
        <Route exact={true} path={[switchRoutes.home]}>
          <HomeScene />
        </Route>
        <Route exact={true} path={[switchRoutes.recipe]}>
          <RecipeScene />
        </Route>
        <Route exact={true} path={[switchRoutes.results]}>
          <ResultsScene />
        </Route>
      </Switch>
    </HashRouter>
  );
};
