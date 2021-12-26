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

export const WorldCuisineLayout: React.FC = () => {
  const countries = [
    { name: 'American', image: 'us.png' },
    { name: 'British', image: 'gb.png' },
    { name: 'Chinese', image: 'cn.png' },
    { name: 'French', image: 'fr.png' },
    { name: 'German', image: 'de.png' },
    { name: 'Greek', image: 'gr.png' },
    { name: 'Indian', image: 'in.png' },
    { name: 'Italian', image: 'it.png' },
    { name: 'Japanese', image: 'jp.png' },
    { name: 'Mexican', image: 'mx.png' },
    { name: 'Spanish', image: 'es.png' },
    { name: 'Thai', image: 'th.png' },
  ];

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
                background={`../src/assets/img/flags/${item.image}`}
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
