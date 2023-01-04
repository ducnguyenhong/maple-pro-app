import { useNavigation } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { FlatList, Image, ImageProps, Text, TouchableOpacity, View } from 'react-native';
import { URL_WEATHER } from '../../../constants/web-view-url';
import IconAssistant from '../images/icon-menu-assistant.png';
import IconFootball from '../images/icon-menu-football.png';
import IconMore from '../images/icon-menu-more.png';
import IconNews from '../images/icon-menu-news.png';
import IconNoti from '../images/icon-menu-noti.png';
import IconPlay from '../images/icon-menu-play.png';
import IconWeather from '../images/icon-menu-weather.png';
import IconWork from '../images/icon-menu-work.png';
import { styles } from './discovery-menu.style';

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
        title: 'Thông báo',
        icon: IconNoti,
        onPress: () => {},
        bgColor: '#fff5e5',
      },
      {
        title: 'Tin tức',
        icon: IconNews,
        onPress: () => navigation.navigate('Home'),
        bgColor: '#f0f7ff',
      },
      {
        title: 'Công việc',
        icon: IconWork,
        onPress: () => {},
        bgColor: '#f1edea',
      },
      {
        title: 'Bóng đá',
        icon: IconFootball,
        onPress: () => navigation.navigate('FootBall'),
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
      {
        title: 'Giải trí',
        icon: IconPlay,
        onPress: () => {},
        bgColor: '#fff0ff',
      },
      {
        title: 'Xem thêm',
        icon: IconMore,
        onPress: () => {},
        bgColor: '#f0f4ff',
      },
    ],
    [navigation],
  );

  return (
    <View style={styles.vMenu}>
      <FlatList
        data={MENU_LIST}
        numColumns={4}
        key="_"
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
