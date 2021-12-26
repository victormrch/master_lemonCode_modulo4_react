import React from 'react';
import { WorldCuisineDetailsInfo } from './world-cuisine-details.vm';
import { useHistory } from 'react-router';
import { routes } from 'core/router/routes';
import { useParams } from 'react-router-dom';
import { COUNTRIES } from './world-cuisine-details.constants';
import { getCountriesDescription } from './world-cuisine-details.business';
import {
  WorldCuisineDetailsCard,
  WorldCuisineDetailsCardImage,
  WorldCuisineDetailsCardTitle,
  WorldCuisineDetailsContainer,
  WorldCuisineDetailsIntroduction,
  WorldCuisineDetailsTitle,
} from './world-cuisine-details.style';
import { WorldCuisineLayout } from 'pods/world-cuisine/world-cuisine.component';

interface Props {
  list: WorldCuisineDetailsInfo[];
}

export const WorldCuisineDetailsList: React.FC<Props> = props => {
  const { list } = props;
  const { id } = useParams<{ id: keyof typeof COUNTRIES }>();

  console.log(id);

  const history = useHistory();
  const HandleClick = (id: string) => () => {
    history.push(routes.recipe(id));
  };

  return (
    <>
      <WorldCuisineDetailsIntroduction>
        <WorldCuisineDetailsTitle>
          {getCountriesDescription(id).name} Recipe
        </WorldCuisineDetailsTitle>
      </WorldCuisineDetailsIntroduction>
      <WorldCuisineDetailsContainer>
        {list.map(item => (
          <WorldCuisineDetailsCard
            key={item.id}
            onClick={HandleClick(item.id.toString())}
          >
            <WorldCuisineDetailsCardImage src={item.image} alt="" />
            <WorldCuisineDetailsCardTitle>
              {item.title}
            </WorldCuisineDetailsCardTitle>
          </WorldCuisineDetailsCard>
        ))}
      </WorldCuisineDetailsContainer>
      <WorldCuisineLayout />
    </>
  );
};
