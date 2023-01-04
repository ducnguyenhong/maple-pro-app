import { useNavigation } from '@react-navigation/native';
import Text from 'components/text';
import moment from 'moment';
import 'moment-lunar';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { styles } from './discovery-info.style';
import IconEvent from './images/icon-event.png';

const DiscoveryInfo: React.FC = () => {
  const navigation = useNavigation<any>();

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
      <View style={{justifyContent: 'flex-end', flexDirection: 'row', paddingHorizontal: 15, marginTop: 15}}>
        <TouchableOpacity activeOpacity={0.8} style={styles.toSearchLeft} onPress={() => navigation.navigate('Search')}>
          <Ionicon name="notifications" size={22} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} style={{marginLeft: 10}} onPress={() => navigation.navigate('Search')}>
          <Ionicon name="search" size={22} color="#FFF" />
        </TouchableOpacity>
      </View>
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
        {/* <View style={styles.vWeather}>
          <View style={styles.vLocale}>
            <Text style={styles.tLocale}>Hà Nội</Text>
            <Text style={styles.tWeather}>24°C</Text>
          </View>
          <Image source={IconWeather} style={styles.imgWeather} resizeMode="cover" />
        </View> */}
      </View>
      <View style={{alignItems: 'center', position: 'absolute', left: 0, bottom: -60, width: '100%'}}>
        <View
          style={{
            backgroundColor: '#FFF',
            width: '92%',
            padding: 12,
            borderRadius: 20,
            height: 150,

            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={IconEvent} style={{width: 20, height: 20}} resizeMode="contain" />
            <Text
              style={{
                textTransform: 'uppercase',
                marginLeft: 8,
                fontFamily: 'SVN-Gilroy Medium',
                fontSize: 12,
                color: '#2a8948',
              }}>
              Sự kiện sắp diễn ra
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginTop: 20, justifyContent: 'space-between'}}>
            <View style={{width: '40%', alignItems: 'center', justifyContent: 'center'}}>
              <View style={{backgroundColor: '#aa3caa', borderRadius: 12}}>
                <Text
                  style={{
                    color: '#FFF',
                    fontSize: 26,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    fontFamily: 'SVN-Gilroy Medium',
                  }}>
                  20 : 00
                </Text>
              </View>
              <Text style={{marginTop: 6}}>Hôm nay</Text>
            </View>
            <View style={{width: '58%'}}>
              <Text style={{lineHeight: 18, marginRight: 20}} numberOfLines={4}>
                Đi về nhà nào, Đi về nhà nào, Đi về nhà nào Đi về nhà nào, Đi về nhà nào, Đi về nhà nào Đi về nhà nào,
                Đi về nhà nào, Đi về nhà nào Đi về nhà nào, Đi về nhà nào, Đi về nhà nào
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DiscoveryInfo;
