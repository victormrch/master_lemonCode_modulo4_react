import { COUNTRIES } from './world-cuisine-details.constants';

export const getCountriesDescription = (country: keyof typeof COUNTRIES) => {
  return COUNTRIES[country];
};
