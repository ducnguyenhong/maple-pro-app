import React, {createRef, memo} from 'react';
import {FlatList, StyleSheet, Dimensions, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  vLoadingItem: {
    marginBottom: 5,
    flexDirection: 'row',
    width: windowWidth,
    borderBottomWidth: 0.5,
    borderColor: '#E6E6E6',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },

  vLoadingItemLeft: {
    flex: 1,
  },

  sphTitle: {
    width: '100%',
    borderRadius: 3,
    height: 12,
  },

  sphTitle2: {
    width: '70%',
    borderRadius: 3,
    marginTop: 10,
    height: 12,
  },

  sphDescription: {
    width: '60%',
    marginTop: 20,
    borderRadius: 3,
    height: 8,
  },

  sphImage: {
    borderRadius: 10,
    overflow: 'hidden',
    marginLeft: 20,
  },
});

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const LoadingNewsItem = memo(() => {
  return (
    <View style={styles.vLoadingItem}>
      <View style={styles.vLoadingItemLeft}>
        <ShimmerPlaceHolder style={styles.sphTitle} duration={1000} />
        <ShimmerPlaceHolder style={styles.sphTitle2} duration={1000} />
        <ShimmerPlaceHolder style={styles.sphDescription} duration={1000} />
      </View>
      <ShimmerPlaceHolder width={120} height={70} style={styles.sphImage} duration={1000} />
    </View>
  );
});

const LoadingNews = () => {
  return (
    <FlatList
      data={Array.from(Array(5).keys())}
      renderItem={() => <LoadingNewsItem />}
      keyExtractor={(_, index) => `news_${index}`}
    />
  );
};

export default memo(LoadingNews);
