import { AppRouter } from 'core/router/router.component';
import React from 'react';
import { hot } from 'react-hot-loader/root';

const App: React.FunctionComponent = () => {
  return <AppRouter />;
};

export default hot(App);
