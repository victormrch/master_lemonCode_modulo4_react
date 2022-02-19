import React from 'react';
import {
  WorldCuisineContainer,
  WorldCuisineText,
  WorldCuisineCountries,
  WorldCuisineTitle,
  WorldCuisineCountryContainer,
  WorldCuisineFlagName,
  WorldCuisineFlagImage,
} from './world-cuisine.style';
import { useHistory } from 'react-router';
import { routes } from 'core/router/routes';
import { countries } from './world-cuisine.constants';
import * as assets from '../../assets';

export const WorldCuisineLayout: React.FC = () => {
  const history = useHistory();
  const HandleClick = (country: string) => () => {
    history.push(routes.category(country));
  };

  return (
    <>
      <WorldCuisineContainer>
        <WorldCuisineTitle>World Cuisine Recipes</WorldCuisineTitle>
        <WorldCuisineCountries>
          {countries.map((item, index) => (
            <WorldCuisineCountryContainer
              key={index}
              onClick={HandleClick(item.name)}
            >
              <WorldCuisineFlagName>{item.name}</WorldCuisineFlagName>
              <WorldCuisineFlagImage
                background={`${assets[item.image]}`}
              ></WorldCuisineFlagImage>
            </WorldCuisineCountryContainer>
          ))}
        </WorldCuisineCountries>
        <WorldCuisineText>
          Food helps us explore our world without leaving the kitchen. Go on a
          journey by browsing our recipes by world cuisine.
        </WorldCuisineText>
      </WorldCuisineContainer>
    </>
  );
};
