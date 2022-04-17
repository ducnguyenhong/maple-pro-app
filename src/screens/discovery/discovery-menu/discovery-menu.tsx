import React, {useMemo} from 'react';
import {FlatList, Image, ImageProps, Text, TouchableOpacity, View} from 'react-native';
import IconFootball from '../images/icon-menu-football.png';
import IconNews from '../images/icon-menu-news.png';
import IconWeather from '../images/icon-menu-weather.png';
import IconAssistant from '../images/icon-menu-assistant.png';
import {styles} from './discovery-menu.style';
import {useNavigation} from '@react-navigation/native';
import {URL_WEATHER} from '../../../constants/web-view-url';

interface MenuItem {
  title: string;
  icon: ImageProps;
  onPress: () => void;
  bgColor: string;
}

const DiscoveryMenu: React.FC = () => {
  const navigation = useNavigation<any>();

  const MENU_LIST: MenuItem[] = useMemo(
    () => [
      {
        title: 'Tin tức',
        icon: IconNews,
        onPress: () => navigation.navigate('Home'),
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
        onPress: () => navigation.navigate('WebView', {url: URL_WEATHER}),
        bgColor: '#FFFBE8',
      },
      {
        title: 'Trợ lý ảo',
        icon: IconAssistant,
        onPress: () => {},
        bgColor: '#EFFBEF',
      },
    ],
    [navigation],
  );

  return (
    <View style={styles.vMenu}>
      <FlatList
        data={MENU_LIST}
        horizontal
        contentContainerStyle={styles.ccMenu}
        keyExtractor={item => item.bgColor}
        renderItem={({item}) => (
          <TouchableOpacity activeOpacity={0.8} style={styles.toItem} onPress={item.onPress}>
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
