import Text from 'components/text';
import React, { memo } from 'react';
import { Image, ImageSourcePropType, View } from 'react-native';
import { styles } from './section.style';

interface SectionProps {
  title: string;
  icon: ImageSourcePropType;
}

const Section: React.FC<SectionProps> = props => {
  const {title, icon} = props;

  return (
    <View style={styles.vSection}>
      <Image style={styles.imgIcon} source={icon} resizeMode="contain" />
      <Text style={styles.tTitle}>{title}</Text>
    </View>
  );
};

export default memo(Section);
