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
  AppHeaderModalContainer,
  AppHeaderModalTitle,
  AppHeaderRight,
  AppHeaderSecondaryTitle,
  AppHeaderText,
} from './app-header.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { SearchInputComponent } from 'pods/search-input/search-input.component';
import { SearchInputLayout } from 'layouts/search-input/search-input.layout';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const AppHeader: React.FC = () => {
  const history = useHistory();
  const HandleClickHome = () => {
    history.push(routes.home);
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const HandleClickSearch = () => {
    setOpen(true);
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AppHeaderModalContainer>
            <AppHeaderModalTitle>
              What do you want to eat today?
            </AppHeaderModalTitle>
            <SearchInputLayout>
              <SearchInputComponent />
            </SearchInputLayout>
          </AppHeaderModalContainer>
        </Box>
      </Modal>
    </>
  );
};
