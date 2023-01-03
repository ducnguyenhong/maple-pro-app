import Text from 'components/text';
import React, { memo, useMemo } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './discovery-dashboard.style';
import IconNews from './images/icon-news.png';
import IconNoti from './images/icon-noti.png';
import IconPlay from './images/icon-play.png';
import IconWork from './images/icon-work.png';

const DiscoveryDashboard: React.FC = () => {
  const arrDashboard = useMemo(
    () => [
      {
        title: 10,
        subTitle: 'Thông báo',
        icon: IconNoti,
        bgColor: '#b3fffe',
      },
      {
        title: 10,
        subTitle: 'Tin tức',
        icon: IconNews,
        bgColor: '#f1ccff',
      },
      {
        title: 10,
        subTitle: 'Công việc',
        icon: IconWork,
        bgColor: '#cfffcc',
      },
      {
        title: 10,
        subTitle: 'Giải trí',
        icon: IconPlay,
        bgColor: '#fdcece',
      },
    ],
    [],
  );

  return (
    <View style={styles.vDashboard}>
      {arrDashboard.map(item => {
        const {title, subTitle, icon, bgColor} = item;
        return (
          <TouchableOpacity activeOpacity={0.8} key={subTitle} style={[styles.toItem, {backgroundColor: bgColor}]}>
            <View style={styles.vTop}>
              <View style={styles.vIcon}>
                <Image source={icon} style={styles.imgIcon} resizeMode="cover" />
              </View>
              <Text style={styles.tTitle}>{title}</Text>
            </View>
            <Text style={styles.tSubTitle}>{subTitle}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default memo(DiscoveryDashboard);
