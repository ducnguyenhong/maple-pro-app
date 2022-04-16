import {useNavigation} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {FlatList, Image, ImageProps, Text, TouchableOpacity, View} from 'react-native';
import IconWeather from './images/icon-weather.png';
import IconCalendar from './images/icon-calendar.png';
import IconFootballSchedule from './images/icon-football-schedule.png';
import IconFootballRaking from './images/icon-football-ranking.png';
import IconFootballHighlight from './images/icon-football-highlight.png';
import {styles} from './utility.style';
import {
  UTIL_URL_FOOTBALL_HIGHLIGHT,
  UTIL_URL_FOOTBALL_RANKING,
  UTIL_URL_FOOTBALL_SCHEDULE,
  UTIL_URL_LUNAR_CALENDAR,
  UTIL_URL_WEATHER,
} from './utility.data';

interface UtilityItem {
  title: string;
  description?: string;
  icon: ImageProps;
  onPress: () => void;
}

const UtilityScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  const UTILITY_LIST: UtilityItem[] = useMemo(
    () => [
      {
        title: 'Thời tiết',
        icon: IconWeather,
        onPress: () => navigation.navigate('WebView', {url: UTIL_URL_WEATHER}),
        description: 'Xem dự báo thời tiết',
      },
      {
        title: 'Âm lịch',
        icon: IconCalendar,
        onPress: () => navigation.navigate('WebView', {url: UTIL_URL_LUNAR_CALENDAR}),
        description: '',
      },
      {
        title: 'Lịch thi đấu bóng đá hôm nay',
        icon: IconFootballSchedule,
        onPress: () => navigation.navigate('WebView', {url: UTIL_URL_FOOTBALL_SCHEDULE}),
        description: 'Lịch thi đấu mới nhất',
      },
      {
        title: 'Bảng xếp hạng bóng đá',
        icon: IconFootballRaking,
        onPress: () => navigation.navigate('WebView', {url: UTIL_URL_FOOTBALL_RANKING}),
        description: '',
      },
      {
        title: 'Highlight bóng đá',
        icon: IconFootballHighlight,
        onPress: () => navigation.navigate('WebView', {url: UTIL_URL_FOOTBALL_HIGHLIGHT}),
        description: 'Video highlight',
      },
    ],
    [navigation],
  );

  return (
    <View style={styles.vMain}>
      <FlatList
        data={UTILITY_LIST}
        keyExtractor={item => item.title}
        renderItem={({item}) => {
          const {icon, title, description, onPress} = item;
          return (
            <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.toItem}>
              <Image source={icon} style={styles.imgItemIcon} />
              <View style={styles.vItemContent}>
                <Text style={styles.tItemTitle}>{title}</Text>
                {!!description && <Text style={styles.tItemDescription}>{description}</Text>}
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default UtilityScreen;
