import React from 'react';
import {ImageBackground, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './header-tab.style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import ImgHeaderBackground from 'assets/common/bg-header.png';
import {useNavigation} from '@react-navigation/native';
import Ionicon from 'react-native-vector-icons/Ionicons';

interface HeaderTabProps extends BottomTabHeaderProps {
  backButton?: boolean;
  title?: string;
}

const HeaderTab: React.FC<HeaderTabProps> = props => {
  const {route, backButton, title} = props;
  const navigation = useNavigation<any>();

  return (
    <View style={styles.vHeader}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground resizeMode="cover" source={ImgHeaderBackground} style={styles.imgbHeader}>
        <View style={styles.vHeaderContent}>
          <View style={styles.vHeaderLeft}>
            {backButton && (
              <Icon
                name="chevron-left"
                color="#fff"
                style={styles.icBack}
                size={16}
                onPress={() => navigation.goBack()}
              />
            )}
          </View>
          <View style={styles.vHeaderCenter}>
            <Text style={styles.tTitle}>{title || route.name}</Text>
          </View>
          <View style={styles.vHeaderRight}>
            <TouchableOpacity activeOpacity={0.8} style={styles.toSearch} onPress={() => navigation.navigate('Search')}>
              <Ionicon name="search" size={19} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HeaderTab;
