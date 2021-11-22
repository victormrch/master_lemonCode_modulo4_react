import React from 'react';
import { MealsInfo } from './meals.vm';

interface Props {
  list: MealsInfo[];
}

export const MealsList: React.FC<Props> = props => {
  const { list } = props;

  return (
    <>
      <div>
        {list.map(item => (
          <div key={item.id}>
            {item.id}-{item.title}
          </div>
        ))}
      </div>
    </>
  );
};
