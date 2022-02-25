import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {Text, View} from 'react-native';
import WebView from 'react-native-webview';
// import { styles } from './home.styles';
const Tab = createBottomTabNavigator<any>();

const getIconTab = (route: string) => {
  switch (route) {
    case 'Home':
      return 'home';

    case 'Setting':
      return 'cog';

    case 'Job':
      return 'briefcase';

    case 'Cv':
      return 'paste';

    default:
      return '';
  }
};

function TabHome() {
  return (
    <WebView
      source={{
        uri: 'https://www.24h.com.vn/bong-da/lich-thi-dau-bong-da-hom-nay-moi-nhat-c48a364371.html',
      }}
      javaScriptEnabled
    />
  );
}

const HomeScreen: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // tabBarIcon: ({ color }) => (
        //   <Icon name={getIconTab(route.name)} size={20} color={color} />
        // ),
        tabBarActiveTintColor: '#299D55',
        tabBarInactiveTintColor: '#A7A7A7',
        tabBarStyle: {height: 55, paddingTop: 5},
        headerStyle: {
          backgroundColor: '#31BC31',
        },
        headerTitleStyle: {
          color: '#fff',
        },
        tabBarLabelStyle: {
          textTransform: 'uppercase',
          marginBottom: 6,
          // fontFamily: fonts.FontQsSemiBold,
        },
        headerShown: false,
        tabBarShowLabel: true,
      })}>
      <Tab.Screen
        name="TabHome"
        component={TabHome}
        // options={{
        //   tabBarLabel: t('HOME:HOME'),
        // }}
      />
      <Tab.Screen
        name="Job"
        component={TabHome}
        options={{
          // header: props => <HeaderTab {...props} title={t('HOME:JOB')} />,
          headerShown: true,
          // tabBarLabel: t('HOME:JOB'),
        }}
      />
      <Tab.Screen
        name="Cv"
        component={TabHome}
        options={{
          // header: props => <HeaderTab {...props} title={t('HOME:CV')} />,
          headerShown: true,
          // tabBarLabel: t('HOME:CV'),
        }}
      />
      {/* <Tab.Screen name="CreateTab" component={CreateScreen} /> */}
      <Tab.Screen
        name="Setting"
        component={TabHome}
        options={{
          // header: props => <HeaderTab {...props} title={t('HOME:SETTING')} />,
          headerShown: true,
          // tabBarLabel: t('HOME:SETTING'),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
