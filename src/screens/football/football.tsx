import { useNavigation } from '@react-navigation/native';
import Line from 'components/line';
import NavigationBar from 'components/navigation-bar';
import Section from 'components/section';
import React, { useCallback } from 'react';
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { FOOTBALL_DATA } from './football.data';
import { styles } from './football.style';
import IconTrophy from './images/icon-trophy.png';
import IconUtility from './images/icon-utility.png';

const FootBallScreen = () => {
  const navigation = useNavigation<any>();

  const onOpenWebView = useCallback(url => navigation.navigate('WebView', {url}), [navigation]);

  return (
    <SafeAreaView style={styles.savMain}>
      <NavigationBar title="Bóng đá" />
      <Section title="Giải đấu" icon={IconTrophy} />
      <View>
        <FlatList
          data={FOOTBALL_DATA}
          numColumns={4}
          key="_"
          keyExtractor={(_, index) => `football_${index}`}
          renderItem={({item}) => (
            <TouchableOpacity activeOpacity={0.8} style={styles.toItem} onPress={() => onOpenWebView(item.url)}>
              <Image source={item.logo} style={styles.imgItem} />
              <Text style={styles.tItem}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <Line isPadding />
      <Section title="Tiện ích" icon={IconUtility} />
    </SafeAreaView>
  );
};

export default FootBallScreen;
