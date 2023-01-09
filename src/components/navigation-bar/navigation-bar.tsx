import { useNavigation } from '@react-navigation/native';
import Text from 'components/text';
import React, { memo } from 'react';
import { ImageBackground, StatusBar, TouchableOpacity, View } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import ImgBg from './images/img-bg.png';
import { styles } from './navigation-bar.style';

interface NavigationBarProps {
  title: string;
  showSearch?: boolean;
  showNoti?: boolean;
  showBack?: boolean;
}

const NavigationBar: React.FC<NavigationBarProps> = props => {
  const {title, showBack = true, showNoti = true, showSearch = true} = props;
  const navigation = useNavigation<any>();

  return (
    <>
      <StatusBar backgroundColor="transparent" translucent />
      <ImageBackground source={ImgBg} style={styles.imgBg} resizeMode="cover">
        <View style={{flexDirection: 'row', flex: 1}}>
          <View style={{flex: 1 / 3, justifyContent: 'center'}}>
            {showBack && (
              <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()} style={{paddingLeft: 15}}>
                <IonIcon name="chevron-back" size={24} color="#FFF" />
              </TouchableOpacity>
            )}
          </View>
          <View style={{flex: 1 / 3, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#FFF', fontFamily: 'SVN-Gilroy SemiBold', fontSize: 18}}>{title}</Text>
          </View>
          <View
            style={{
              flex: 1 / 3,
              alignItems: 'center',
              justifyContent: 'flex-end',
              flexDirection: 'row',
            }}>
            {showNoti && (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Search')}
                style={{marginRight: 10}}>
                <IonIcon name="notifications" size={21} color="#FFF" />
              </TouchableOpacity>
            )}
            {showSearch && (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Search')}
                style={{paddingRight: 15}}>
                <IonIcon name="search" size={21} color="#FFF" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default memo(NavigationBar);
