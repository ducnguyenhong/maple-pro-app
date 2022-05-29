import {DISCOVERY_NEWS} from 'models/discovery-news';
import React, {memo, useState, useEffect} from 'react';
import {FlatList, Text, TouchableHighlight, View, ActivityIndicator} from 'react-native';
import {useQuery} from 'react-query';
import {getNews} from './discovery-news.query';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {styles} from './discovery-news.style';
import {LinkPreview} from '@flyerhq/react-native-link-preview';

const DiscoveryNews: React.FC = () => {
  const {data, isLoading: loadingData, status} = useQuery<DISCOVERY_NEWS[]>('DISCOVERY_NEWS', getNews);
  const [loadingPreview, setLoadingPreview] = useState(true);

  const navigation = useNavigation<any>();

  useEffect(() => {
    const setLoading = setTimeout(() => {
      if (status === 'success') {
        setLoadingPreview(false);
      }
    }, 2500);
    return () => clearTimeout(setLoading);
  }, [status]);

  return (
    <View style={{...styles.vNews, height: loadingPreview ? 400 : undefined}}>
      {(loadingPreview || loadingData) && (
        <View style={styles.vLoading}>
          <ActivityIndicator color="#828282" size={30} />
          <Text style={styles.tLoading}>Đang lấy tin tức...</Text>
        </View>
      )}
      <FlatList
        data={data}
        ListEmptyComponent={<View />}
        keyExtractor={(_, index) => `news_${index}`}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <LinkPreview
              enableAnimation={false}
              text={item.link}
              renderLinkPreview={({previewData}) => {
                if (!previewData || !previewData.title || item.source.toUpperCase().includes('BBC')) {
                  return null;
                }
                const {title, image} = previewData;

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
    </View>
  );
};

export default memo(DiscoveryNews);
