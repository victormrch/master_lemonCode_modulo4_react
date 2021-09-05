import { generatePath } from 'react-router-dom';
interface SwitchRoutes {
  category: string;
  home: string;
  recipe: string;
  results: string;
}

export const switchRoutes: SwitchRoutes = {
  category: '/category/:id',
  home: '/',
  recipe: '/recipe/:id',
  results: '/results',
};

interface Routes extends Omit<SwitchRoutes, 'recipe' | 'category'> {
  recipe: (id: string) => string;
  category: (id: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  recipe: (id: string) => generatePath(switchRoutes.recipe, { id }),
  category: (id: string) => generatePath(switchRoutes.category, { id }),
};
