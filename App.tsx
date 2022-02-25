import React from 'react';
import Toast from 'react-native-toast-message';
import {RecoilRoot} from 'recoil';
import {Router} from './src/routers/router';

const App = () => {
  return (
    <RecoilRoot>
      <Router />
      <Toast />
    </RecoilRoot>
  );
};

export default App;
