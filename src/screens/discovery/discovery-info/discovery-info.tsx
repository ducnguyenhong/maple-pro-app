import Text from 'components/text';
import moment from 'moment';
import 'moment-lunar';
import React from 'react';
import { Image, View } from 'react-native';
import IconWeather from '../images/icon-weather.png';
import { styles } from './discovery-info.style';

const DiscoveryInfo: React.FC = () => {
  return (
    <View
      style={{
        backgroundColor: '#26ba55',
        position: 'relative',
        marginBottom: 70,
        height: 200,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
      }}>
      <View style={styles.vInfo}>
        <View style={styles.vLeft}>
          <View style={styles.vHello}>
            <Text style={styles.tHello}>Xin chào,</Text>
            <Text style={styles.tName}>Nguyễn Hồng Đức</Text>
          </View>
          <View style={styles.vDate}>
            <Text style={styles.tDate}>{moment().format('DD/MM/YYYY')}</Text>
            <Text style={styles.tSubDate}>({moment().lunar().format('DD/MM/YYYY')} âm lịch)</Text>
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
      <View style={{alignItems: 'center', position: 'absolute', left: 0, bottom: -60, width: '100%'}}>
        <View
          style={{
            backgroundColor: '#FFF',
            width: '80%',
            padding: 20,
            borderRadius: 20,
            marginHorizontal: 'auto',
            height: 150,

            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,

            elevation: 8,
          }}>
          <Text>ducnh</Text>
        </View>
      </View>
    </View>
  );
};

export default DiscoveryInfo;
