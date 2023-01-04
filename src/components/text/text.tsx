import React, { memo, ReactNode, useMemo } from 'react';
import { StyleProp, Text as TextComponent, TextProps, TextStyle } from 'react-native';

interface TextComponentProps {
  style?: StyleProp<TextStyle>;
  children?: ReactNode | number | string;
}

const Text: React.FC<TextComponentProps & TextProps> = props => {
  const {children, style, ...rest} = props;

  const primaryStyle = useMemo(() => {
    if (Array.isArray(style) && !!style.length) {
      return style.reduce((prev: any, curr: any) => ({...prev, ...curr}));
    }
    return style;
  }, [style]) as TextStyle;

  const defaultStyle = useMemo(
    () => ({
      fontFamily: 'SVN-Gilroy Regular',
      fontSize: 14,
      color: '#292D32',
    }),
    [],
  );
  return (
    <TextComponent style={primaryStyle ? [defaultStyle, {...primaryStyle}] : defaultStyle} {...rest}>
      {children}
    </TextComponent>
  );
};

export default memo(Text);
