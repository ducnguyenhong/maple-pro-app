import React, {LegacyRef, useEffect, useRef} from 'react';
import {TextInput, TextInputComponent, View} from 'react-native';
import {styles} from './search.style';

const Search: React.FC = () => {
  const inputRef = useRef<any>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <View>
      <TextInput ref={inputRef} />
    </View>
  );
};

export default Search;
