import loadable from '@loadable/component';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from './router.type';

const HomeScreen = loadable(() => import('../screens/home'));
const NewsWebViewScreen = loadable(() => import('../screens/news/news.webview'));

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AuthRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="NewsWebView" component={NewsWebViewScreen} />
      {/* <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          header: props => (
            <HeaderStack
              {...props}
              backButton
              title={t('COMMON:CHANGE_PASS')}
            />
          ),
          headerShown: true,
        }}
      />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          header: props => (
            <HeaderStack
              {...props}
              backButton
              title={t('COMMON:INFORMATION')}
            />
          ),
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="UpdateProfileScreen"
        component={UpdateProfileScreen}
        options={{
          header: props => (
            <HeaderStack
              {...props}
              backButton
              title={t('COMMON:UPDATE_INFO')}
            />
          ),
          headerShown: true,
        }}
      /> */}
      {/* <Stack.Screen
        name="JobDetail"
        component={JobDetail}
        options={{
          header: props => (
            <HeaderStack {...props} backButton title={t('COMMON:JOB_DETAIL')} />
          ),
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="CvDetail"
        component={CvDetail}
        options={{
          header: props => (
            <HeaderStack {...props} backButton title={t('COMMON:CV_DETAIL')} />
          ),
          headerShown: true,
        }}
      /> */}
    </Stack.Navigator>
  );
};
