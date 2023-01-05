import { useNavigation } from '@react-navigation/native';
import Text from 'components/text';
import moment from 'moment';
import 'moment-lunar';
import React, { memo } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { styles } from './discovery-info.style';
import IconCreateEvent from './images/icon-create-event.png';
import IconEvent from './images/icon-event.png';

const DiscoveryInfo: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.vMain}>
      <View style={styles.vNavigation}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Search')}>
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
      <View style={styles.vEventWrapper}>
        <View style={styles.vEvent}>
          <View style={styles.vEventTitle}>
            <TouchableOpacity activeOpacity={0.8} style={styles.toEventTitleLeft}>
              <Image source={IconEvent} style={styles.imgIconEventTitle} resizeMode="contain" />
              <Text style={styles.tEventTitle}>Sự kiện sắp diễn ra</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8}>
              <Image source={IconCreateEvent} style={styles.imgIconCreateEvent} resizeMode="contain" />
            </TouchableOpacity>
          </View>

          <View style={styles.vEventMain}>
            <View style={styles.vEventTime}>
              <View style={styles.vEventHour}>
                <Text style={styles.tEventHour}>20 : 00</Text>
              </View>
              <Text style={styles.tEventDay}>Hôm nay</Text>
            </View>
            <View style={styles.vEventContent}>
              <Text style={styles.tEventContent} numberOfLines={4}>
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

export default memo(DiscoveryInfo);
