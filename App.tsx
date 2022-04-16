import React, {useEffect} from 'react';
import Toast from 'react-native-toast-message';
import {RecoilRoot} from 'recoil';
import AppRouter from './src/routers';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <RecoilRoot>
      <AppRouter />
      <Toast />
    </RecoilRoot>
  );
};

export default App;
