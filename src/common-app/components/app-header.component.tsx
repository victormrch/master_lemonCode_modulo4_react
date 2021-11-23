import React from 'react';
import { routes } from 'core/router/routes';
import { useHistory } from 'react-router';
import {
  AppHeaderCenter,
  AppHeaderContainer,
  AppHeaderIconMedia,
  AppHeaderImage,
  AppHeaderLeft,
  AppHeaderMainTitle,
  AppHeaderRight,
  AppHeaderSecondaryTitle,
  AppHeaderText,
} from './app-header.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

export const AppHeader: React.FC = () => {
  const history = useHistory();
  const HandleClickHome = () => {
    history.push(routes.home);
  };
  const HandleClickSearch = () => {
    history.push(routes.results);
  };
  return (
    <>
      <AppHeaderContainer>
        <AppHeaderLeft></AppHeaderLeft>
        <AppHeaderCenter>
          <AppHeaderImage />
          <AppHeaderText>
            <AppHeaderMainTitle>KITCHEN JUNGLE</AppHeaderMainTitle>
            <AppHeaderSecondaryTitle>
              Even a Monkey Can Do It
            </AppHeaderSecondaryTitle>
          </AppHeaderText>
        </AppHeaderCenter>
        <AppHeaderRight>
          <AppHeaderIconMedia>
            <FontAwesomeIcon
              icon={faHome}
              size="2x"
              onClick={HandleClickHome}
            />
          </AppHeaderIconMedia>
          <AppHeaderIconMedia>
            <FontAwesomeIcon
              icon={faSearch}
              size="2x"
              onClick={HandleClickSearch}
            />
          </AppHeaderIconMedia>
        </AppHeaderRight>
      </AppHeaderContainer>
    </>
  );
};
