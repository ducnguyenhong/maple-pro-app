import loadable from '@loadable/component';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from './router.type';

const HeaderStack = loadable(() => import('../layouts/header-stack'));

const HomeScreen = loadable(() => import('../screens/home'));
const NewsWebViewScreen = loadable(() => import('../screens/news/news.webview'));
const CreateNoteScreen = loadable(() => import('../screens/note/create-note'));
const WebViewScreen = loadable(() => import('../screens/web-view'));
const SearchScreen = loadable(() => import('../screens/search'));
const VirtualAssistantScreen = loadable(() => import('../screens/virtual-assistant'));

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AuthRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="WebView"
        component={WebViewScreen}
        options={{
          header: props => <HeaderStack {...props} backButton title="Maple Pro" />,
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="NewsWebView"
        component={NewsWebViewScreen}
        options={{
          header: props => <HeaderStack {...props} backButton title="Maple Pro" />,
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="CreateNote"
        component={CreateNoteScreen}
        options={{
          header: props => <HeaderStack {...props} backButton title="Tạo ghi chú" />,
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          header: props => <HeaderStack {...props} backButton title="Tìm kiếm" />,
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="VirtualAssistant"
        component={VirtualAssistantScreen}
        options={{
          header: props => <HeaderStack {...props} backButton title="Trợ lý ảo" />,
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};
