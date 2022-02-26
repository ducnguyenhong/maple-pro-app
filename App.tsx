import React from 'react';
import Toast from 'react-native-toast-message';
import {RecoilRoot} from 'recoil';
import AppRouter from './src/routers';

const App = () => {
  return (
    <RecoilRoot>
      <AppRouter />
      <Toast />
    </RecoilRoot>
  );
};

export default App;
