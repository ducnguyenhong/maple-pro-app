import loadable from '@loadable/component';
import {createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import WebView from 'react-native-webview';
import {styles} from './home.style';
import {RootTabParamList} from './home.type';
import {Alert, Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import { styles } from './home.styles';
const BottomTab = createBottomTabNavigator<RootTabParamList>();
const HeaderTab = loadable(() => import('layouts/header-tab'));

const NewsScreen = loadable(() => import('../news'));
const CategoryScreen = loadable(() => import('../category'));
const DiscoveryScreen = loadable(() => import('../discovery'));
const UtilityScreen = loadable(() => import('../utility'));

const getIconTab = (routeName: string, focused: boolean, color: string) => {
  switch (routeName) {
    case 'Home':
      return <IonIcon name={focused ? 'home' : 'home-outline'} color={color} size={20} />;

    case 'Application':
      return <IonIcon name={focused ? 'grid' : 'grid-outline'} color={color} size={19.5} />;

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

const _renderIcon = (routeName: string, selectedTab: string) => {
  let icon = '';

  switch (routeName) {
    case 'title1':
      icon = 'ios-home-outline';
      break;
    case 'title2':
      icon = 'settings-outline';
      break;
    case 'title3':
      icon = 'ios-home-outline';
      break;
    case 'title4':
      icon = 'settings-outline';
      break;
  }

  return <Ionicons name={icon} size={25} color={routeName === selectedTab ? 'black' : 'gray'} />;
};

const renderTabBar = ({routeName, selectedTab, navigate}: any) => {
  return (
    <TouchableOpacity
      onPress={() => navigate(routeName)}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {_renderIcon(routeName, selectedTab)}
    </TouchableOpacity>
  );
};

const HomeScreen: React.FC = () => {
  return (
    // <CurvedBottomBar.Navigator
    //   style={styles.bottomBar}
    //   strokeWidth={0.5}
    //   height={50}
    //   circleWidth={50}
    //   bgColor="white"
    //   initialRouteName="title1"
    //   borderTopLeftRight
    //   swipeEnabled
    //   renderCircle={({selectedTab, navigate}) => (
    //     <Animated.View style={styles.btnCircle}>
    //       <TouchableOpacity
    //         style={{
    //           flex: 1,
    //           justifyContent: 'center',
    //         }}
    //         onPress={() => Alert.alert('Click Action')}>
    //         {/* <Ionicons name={'apps-sharp'} color="gray" size={25} /> */}
    //         <Ionicons name={selectedTab === '' ? 'compass' : 'compass-outline'} color="gray" size={35} />
    //       </TouchableOpacity>
    //     </Animated.View>
    //   )}
    //   tabBar={renderTabBar}>
    //   <CurvedBottomBar.Screen
    //     name="title1"
    //     position="left"
    //     component={({navigate}) => <View style={{backgroundColor: '#BFEFFF', flex: 1}} />}
    //   />
    //   <CurvedBottomBar.Screen
    //     name="title2"
    //     component={({navigate}) => <View style={{backgroundColor: '#FFEBCD', flex: 1}} />}
    //     position="right"
    //   />
    //   <CurvedBottomBar.Screen
    //     name="title3"
    //     position="left"
    //     component={({navigate}) => <View style={{backgroundColor: '#BFEFFF', flex: 1}} />}
    //   />
    //   <CurvedBottomBar.Screen
    //     name="title4"
    //     component={({navigate}) => <View style={{backgroundColor: '#FFEBCD', flex: 1}} />}
    //     position="right"
    //   />
    // </CurvedBottomBar.Navigator>
    <BottomTab.Navigator
      initialRouteName="Discovery"
      screenOptions={({route}) => ({
        // style: styles.navigator,
        tabStyle: {
          // backgroundColor: barColor
        },
        tabBarIcon: ({color, focused}) => getIconTab(route.name, focused, color),
        tabBarActiveTintColor: '#02B04B',
        tabBarInactiveTintColor: '#A7A7A7',
        tabBarStyle: {
          height: 60,
          paddingTop: 5,
          overflow: 'hidden',
          borderTopRightRadius: 20,
          // borderTopStartRadius: 30,
          borderTopLeftRadius: 20,
        },
        headerStyle: {backgroundColor: '#090909'},
        headerTitleStyle: {color: '#FFF'},
        tabBarLabelStyle: {
          marginBottom: 8,
          fontSize: 13,
          fontFamily: 'SVN-Gilroy Medium',
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
        name="Application"
        component={UtilityScreen}
        options={{
          header: props => <HeaderTab {...props} title="Ứng dụng" />,
          headerShown: true,
          tabBarLabel: 'Ứng dụng',
        }}
      />
      <BottomTab.Screen
        name="Discovery"
        component={DiscoveryScreen}
        options={{
          header: props => <HeaderTab {...props} title="Khám phá" />,
          // headerShown: true,
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
