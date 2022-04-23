import {DISCOVERY_NEWS} from 'models/discovery-news';
import React, {memo} from 'react';
import {FlatList, Text, TouchableHighlight, View} from 'react-native';
import {useQuery} from 'react-query';
import {getNews} from './discovery-news.query';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {styles} from './discovery-news.style';

const DiscoveryNews: React.FC = () => {
  const {data} = useQuery<DISCOVERY_NEWS[]>('DISCOVERY_NEWS', getNews);

  const navigation = useNavigation<any>();

  return (
    <FlatList
      data={data}
      keyExtractor={(_, index) => `news_${index}`}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <TouchableHighlight
          underlayColor="#F0F0F5"
          style={styles.thNewsItem}
          onPress={() => navigation.navigate('WebView', {url: item.url})}>
          <View style={styles.vNewsItem}>
            <View style={styles.vNewsContent}>
              <Text numberOfLines={2} style={styles.tNewsTitle}>
                {item.title}
              </Text>
              <Text numberOfLines={1} style={styles.tNewsSource}>
                {item.source.name}
              </Text>
            </View>
            <FastImage source={{uri: item.urlToImage}} style={styles.fimgNewsThumbnail} resizeMode="contain" />
          </View>
        </TouchableHighlight>
      )}
    />
  );
};

export default memo(DiscoveryNews);
