import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import ImgHeaderBackground from 'assets/common/bg-header.png';
import React from 'react';
import { ImageBackground, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { styles } from './header-tab.style';

interface HeaderTabProps extends BottomTabHeaderProps {
  backButton?: boolean;
  title?: string;
  onlyShowStatusBar?: boolean;
}

const HeaderTab: React.FC<HeaderTabProps> = props => {
  const {route, backButton, title, onlyShowStatusBar} = props;
  const navigation = useNavigation<any>();

  if (onlyShowStatusBar) {
    return <StatusBar backgroundColor="#36af5c" />;
  }

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
