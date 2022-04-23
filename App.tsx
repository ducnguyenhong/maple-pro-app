import React, {useEffect} from 'react';
import Toast from 'react-native-toast-message';
import {RecoilRoot} from 'recoil';
import AppRouter from './src/routers';
import SplashScreen from 'react-native-splash-screen';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <AppRouter />
        <Toast />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
