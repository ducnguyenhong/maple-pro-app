import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { FOOTBALL_DATA } from './football.data';
import { styles } from './football.style';

const FootBallScreen = () => {
  const navigation = useNavigation<any>();

  const onOpenWebView = useCallback(url => navigation.navigate('WebView', {url}), [navigation]);

  return (
    <SafeAreaView style={styles.savMain}>
      <FlatList
        data={FOOTBALL_DATA}
        keyExtractor={(_, index) => `footbal_${index}`}
        renderItem={({item}) => (
          <TouchableOpacity activeOpacity={0.8} style={styles.toItem} onPress={() => onOpenWebView(item.url)}>
            <Image source={item.logo} style={styles.imgItem} />
            <Text style={styles.tItem}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default FootBallScreen;
