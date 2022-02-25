import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppRoute} from './auth-route';

export function Router() {
  return (
    <NavigationContainer>
      <AppRoute />
    </NavigationContainer>
  );
}
