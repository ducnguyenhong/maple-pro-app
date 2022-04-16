import React from 'react';
import {FlatList, Image, ImageProps, Text, TouchableOpacity, View} from 'react-native';
import IconFootball from '../images/icon-menu-football.png';
import IconNews from '../images/icon-menu-news.png';
import IconWeather from '../images/icon-menu-weather.png';
import {styles} from './discovery-menu.style';

interface MenuItem {
  title: string;
  icon: ImageProps;
  onPress: () => void;
  bgColor: string;
}

const MENU_LIST: MenuItem[] = [
  {
    title: 'Tin tức',
    icon: IconNews,
    onPress: () => {},
    bgColor: '#F2F9FF',
  },
  {
    title: 'Bóng đá',
    icon: IconFootball,
    onPress: () => {},
    bgColor: '#FFF3F3',
  },
  {
    title: 'Thời tiết',
    icon: IconWeather,
    onPress: () => {},
    bgColor: '#FFFBE8',
  },
  {
    title: 'Tin tức',
    icon: IconNews,
    onPress: () => {},
    bgColor: '#EFFBEF',
  },
];

const DiscoveryMenu: React.FC = () => {
  return (
    <View style={styles.vMenu}>
      <FlatList
        data={MENU_LIST}
        horizontal
        contentContainerStyle={styles.ccMenu}
        keyExtractor={item => item.bgColor}
        renderItem={({item}) => (
          <TouchableOpacity activeOpacity={0.8} style={styles.toItem}>
            <View
              style={[
                styles.vItem,
                {
                  backgroundColor: item.bgColor,
                },
              ]}>
              <Image source={item.icon} style={styles.imgItem} />
            </View>
            <Text style={styles.tItem}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default DiscoveryMenu;
