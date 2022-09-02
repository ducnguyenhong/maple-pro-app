import loadable from '@loadable/component';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RootTabParamList } from './home.type';

// import { styles } from './home.styles';
const BottomTab = createBottomTabNavigator<RootTabParamList>();
const HeaderTab = loadable(() => import('layouts/header-tab'));

const NewsScreen = loadable(() => import('../news'));
const CategoryScreen = loadable(() => import('../category'));
const DiscoveryScreen = loadable(() => import('../discovery'));
const UtilityScreen = loadable(() => import('../utility'));
const FootBallScreen = loadable(() => import('../football'));

const getIconTab = (routeName: string, focused: boolean, color: string) => {
  switch (routeName) {
    case 'Home':
      return <IonIcon name={focused ? 'home' : 'home-outline'} color={color} size={20} />;

    case 'FootBall':
      return <IonIcon name={focused ? 'football' : 'football-outline'} color={color} size={19.5} />;

    case 'Discovery':
      return <IonIcon name={focused ? 'compass' : 'compass-outline'} color={color} size={24} />;

    case 'Utility':
      return <McIcon name={focused ? 'layers' : 'layers-outline'} color={color} size={24.5} />;

    case 'User':
      return <IonIcon name={focused ? 'person-circle' : 'person-circle-outline'} color={color} size={23.5} />;

    default:
      return null;
  }
};

const HomeScreen: React.FC = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Discovery"
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => getIconTab(route.name, focused, color),
        tabBarActiveTintColor: '#F06300',
        tabBarInactiveTintColor: '#A7A7A7',
        tabBarStyle: {
          height: 60,
          paddingTop: 5,
          overflow: 'hidden',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
        headerTitleStyle: {color: '#FFF'},
        tabBarLabelStyle: {
          marginBottom: 8,
          fontSize: 13,
          fontFamily: 'SVN-Gilroy SemiBold',
        },
        headerShown: false,
        tabBarShowLabel: true,
      })}>
      <BottomTab.Screen
        name="Home"
        component={NewsScreen}
        options={{
          tabBarLabel: 'Trang chủ',
          header: props => <HeaderTab {...props} title="Trang chủ" />,
          headerShown: true,
        }}
      />
      <BottomTab.Screen
        name="FootBall"
        component={FootBallScreen}
        options={{
          header: props => <HeaderTab {...props} title="Bóng đá" />,
          headerShown: true,
          tabBarLabel: 'Bóng đá',
        }}
      />
      <BottomTab.Screen
        name="Discovery"
        component={DiscoveryScreen}
        options={{
          header: props => <HeaderTab {...props} title="Khám phá" />,
          headerShown: true,
          tabBarLabel: 'Khám phá',
        }}
      />
      <BottomTab.Screen
        name="Utility"
        component={UtilityScreen}
        options={{
          header: props => <HeaderTab {...props} title="Tiện ích" />,
          headerShown: true,
          tabBarLabel: 'Tiện ích',
        }}
      />
      <BottomTab.Screen
        name="User"
        component={CategoryScreen}
        options={{
          header: props => <HeaderTab {...props} title="Tài khoản" />,
          headerShown: true,
          tabBarLabel: 'Tài khoản',
        }}
      />
    </BottomTab.Navigator>
  );
};

export default HomeScreen;
