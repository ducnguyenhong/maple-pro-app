import React, { memo } from 'react';
import { View } from 'react-native';
import { styles } from './line.style';

interface LineProps {
  isPadding?: boolean;
}

const Line: React.FC<LineProps> = props => {
  const {isPadding} = props;

  return <View style={isPadding ? styles.vLinePadding : styles.vLine} />;
};

export default memo(Line);
