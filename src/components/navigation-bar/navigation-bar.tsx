import Text from 'components/text';
import React, { memo } from 'react';
import { ImageBackground, View } from 'react-native';
import ImgBg from './images/img-bg.png';
import { styles } from './navigation-bar.style';

interface NavigationBarProps {
  title: string;
  showSearch?: boolean;
  showNoti?: boolean;
  showBack?: boolean;
}

const NavigationBar: React.FC<NavigationBarProps> = props => {
  const {title, showBack, showNoti, showSearch} = props;

  return (
    <View>
      <ImageBackground source={ImgBg} style={styles.imgBg} resizeMode="cover">
        <View>
          <Text>ducnh</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default memo(NavigationBar);
