import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {NEWS_WEB_LIST} from './news.data';
import {styles} from './news.style';
import MapleLogo from '../../assets/common/logo.png';

const NewsScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.vNews}>
      <View style={styles.vMaple}>
        <Image source={MapleLogo} resizeMode="contain" style={styles.imgMaple} />
        <Text style={styles.tMaple}>Maple Pro</Text>
      </View>
      <View style={styles.vNewsList}>
        {NEWS_WEB_LIST.map(item => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              key={item.url}
              style={styles.toNewsItem}
              onPress={() => {
                navigation.navigate('NewsWebView', {url: item.url});
              }}>
              <Image source={item.logo} style={styles.imgNewsItem} resizeMode="contain" />
              <Text style={styles.tNewsItem}>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default NewsScreen;
