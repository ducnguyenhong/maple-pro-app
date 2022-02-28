import React from 'react';
import {ImageBackground, StatusBar, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImgHeaderBackground from '../../assets/common/bg-header.png';
import {useNavigation} from '@react-navigation/native';
import {StackHeaderProps} from '@react-navigation/stack';
import {styles} from './header-stack.style';

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
              <Icon
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
          <View style={styles.vHeaderRight} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default HeaderStack;
