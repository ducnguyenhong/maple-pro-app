import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AuthRoute} from './auth-route';

export function AppRouter() {
  return (
    <NavigationContainer>
      <AuthRoute />
    </NavigationContainer>
  );
}
