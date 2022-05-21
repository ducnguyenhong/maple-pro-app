import {DISCOVERY_NEWS} from 'models/discovery-news';
import React, {memo} from 'react';
import {FlatList, Text, TouchableHighlight, View} from 'react-native';
import {useQuery} from 'react-query';
import {getNews} from './discovery-news.query';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {styles} from './discovery-news.style';
import {LinkPreview} from '@flyerhq/react-native-link-preview';

const DiscoveryNews: React.FC = () => {
  const {data} = useQuery<DISCOVERY_NEWS[]>('DISCOVERY_NEWS', getNews);

  const navigation = useNavigation<any>();

  if (!data || !Array.isArray(data) || !data.length) {
    return null;
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(_, index) => `news_${index}`}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <LinkPreview
            text={item.link}
            renderLinkPreview={({previewData}) => {
              if (!previewData) {
                return null;
              }
              const {title, description, image} = previewData;

              if (!title) {
                return null;
              }

              return (
                <TouchableHighlight
                  underlayColor="#F0F0F5"
                  style={styles.thNewsItem}
                  onPress={() => navigation.navigate('WebView', {url: item.link})}>
                  <View style={styles.vNewsItem}>
                    <View style={styles.vNewsContent}>
                      <Text numberOfLines={3} style={styles.tNewsTitle}>
                        {title}
                      </Text>
                      <Text numberOfLines={1} style={styles.tNewsSource}>
                        {item.source}
                      </Text>
                    </View>
                    <FastImage source={{uri: image?.url}} style={styles.fimgNewsThumbnail} resizeMode="cover" />
                  </View>
                </TouchableHighlight>
              );
            }}
          />
        );
      }}
    />
  );
};

export default memo(DiscoveryNews);
