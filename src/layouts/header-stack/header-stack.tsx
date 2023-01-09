import { useNavigation } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';
import ImgHeaderBackground from 'assets/common/bg-header.png';
import React from 'react';
import { ImageBackground, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { styles } from './header-stack.style';

interface HeaderStackProps extends StackHeaderProps {
  backButton?: boolean;
  title?: string;
}

const HeaderStack: React.FC<HeaderStackProps> = props => {
  const {route, backButton, title} = props;
  const navigation = useNavigation<any>();

  return (
    <View style={styles.vHeader}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground resizeMode="cover" source={ImgHeaderBackground} style={styles.imgHeader}>
        <View style={styles.vHeaderContent}>
          <View style={styles.vHeaderLeft}>
            {backButton && (
              <Ionicon
                name="chevron-back"
                color="#fff"
                style={styles.icBack}
                size={23}
                onPress={() => navigation.goBack()}
              />
            )}
          </View>
          <View style={styles.vHeaderCenter}>
            <Text style={styles.tTitle} numberOfLines={1}>
              {title || route.name}
            </Text>
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

export default HeaderStack;
