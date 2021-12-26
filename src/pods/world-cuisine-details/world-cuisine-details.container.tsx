import React from 'react';
import { getWorldCuisineDetailsByCountry } from './api';
import { WorldCuisineDetailsList } from './world-cuisine-details.component';
import { mapMWorldCuisineDetailsListToVM } from './world-cuisine-details.mapper';
import { WorldCuisineDetailsInfo } from './world-cuisine-details.vm';

interface Props {
  country: string;
}

export const WorldCuisineDetailsContainer: React.FC<Props> = props => {
  const { country } = props;

  const [WorldCuisineDetails, setWorldCuisineDetails] = React.useState<
    WorldCuisineDetailsInfo[]
  >(null);

  React.useEffect(() => {
    getWorldCuisineDetailsByCountry(country)
      .then(mapMWorldCuisineDetailsListToVM)
      .then(setWorldCuisineDetails);
  }, [country]);

  return (
    <>
      {WorldCuisineDetails && (
        <WorldCuisineDetailsList list={WorldCuisineDetails} />
      )}
    </>
  );
};
