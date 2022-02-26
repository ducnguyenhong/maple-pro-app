import loadable from '@loadable/component';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import WebView from 'react-native-webview';
import {RootTabParamList} from './home.type';
// import { styles } from './home.styles';
const BottomTab = createBottomTabNavigator<RootTabParamList>();
const HeaderTab = loadable(() => import('../../layouts/header-tab'));

const NewsScreen = loadable(() => import('../news'));
const CategoryScreen = loadable(() => import('../category'));
const NoteScreen = loadable(() => import('../note'));

const getIconTab = (route: string, focused: boolean) => {
  switch (route) {
    case 'News':
      return 'newspaper';

    case 'Category':
      return 'menu-sharp';

    case 'Weather':
      return 'partly-sunny';

    case 'Note':
      return 'document-text';

    default:
      return '';
  }
};

function TabWeather() {
  return (
    <WebView
      source={{
        uri: 'https://weather.com/vi-VN/weather/today/l/b0614d49f2964ecd501712774d034f27c842ff0eb4492e1aa7d160e3cb2f67c0',
      }}
      javaScriptEnabled
    />
  );
}

const HomeScreen: React.FC = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => <Icon name={getIconTab(route.name, focused)} size={20} color={color} />,
        tabBarActiveTintColor: '#F2922E',
        tabBarInactiveTintColor: '#A7A7A7',
        tabBarStyle: {height: 55, paddingTop: 5},
        headerStyle: {backgroundColor: '#090909'},
        headerTitleStyle: {color: '#fff'},
        tabBarLabelStyle: {
          textTransform: 'uppercase',
          marginBottom: 6,
          // fontFamily: fonts.FontQsSemiBold,
        },
        headerShown: false,
        tabBarShowLabel: true,
      })}>
      <BottomTab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarLabel: 'Tin tức',
          header: props => <HeaderTab {...props} title="Tin tức" />,
          headerShown: true,
        }}
      />
      <BottomTab.Screen
        name="Weather"
        component={TabWeather}
        options={{
          header: props => <HeaderTab {...props} title="Thời tiết" />,
          headerShown: true,
          tabBarLabel: 'Thời tiết',
        }}
      />
      <BottomTab.Screen
        name="Note"
        component={NoteScreen}
        options={{
          header: props => <HeaderTab {...props} title="Ghi chú" />,
          headerShown: true,
          tabBarLabel: 'Ghi chú',
        }}
      />
      {/* <Tab.Screen name="CreateTab" component={CreateScreen} /> */}
      <BottomTab.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          header: props => <HeaderTab {...props} title="Danh mục" />,
          headerShown: true,
          tabBarLabel: 'Danh mục',
        }}
      />
    </BottomTab.Navigator>
  );
};

export default HomeScreen;
