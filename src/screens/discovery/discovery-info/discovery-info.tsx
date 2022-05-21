import React from 'react';
import {Image, Text, View} from 'react-native';
import IconWeather from '../images/icon-weather.png';
import {styles} from './discovery-info.style';
import moment from 'moment';
import 'moment-lunar';

const DiscoveryInfo: React.FC = () => {
  return (
    <View style={styles.vInfo}>
      <View style={styles.vLeft}>
        <View style={styles.vHello}>
          <Text style={styles.tHello}>Xin chào,</Text>
          <Text style={styles.tName}>Đức</Text>
        </View>
        <View style={styles.vDate}>
          <Text style={styles.tDate}>{moment().format('DD/MM/YYYY')}</Text>
          <Text style={styles.tSubDate}>({moment().lunar().format('DD/MM')} âm lịch)</Text>
        </View>
      </View>
      <View style={styles.vWeather}>
        <View style={styles.vLocale}>
          <Text style={styles.tLocale}>Hà Nội</Text>
          <Text style={styles.tWeather}>24°C</Text>
        </View>
        <Image source={IconWeather} style={styles.imgWeather} resizeMode="cover" />
      </View>
    </View>
  );
};

export default DiscoveryInfo;
