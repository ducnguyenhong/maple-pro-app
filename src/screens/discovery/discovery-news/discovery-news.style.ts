import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  thNewsItem: {
    borderBottomWidth: 0.5,
    borderColor: '#E6E6E6',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },

  vNewsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  vNewsContent: {
    flex: 1,
    justifyContent: 'space-between',
  },

  tNewsTitle: {
    fontFamily: 'SVN-Gilroy SemiBold',
    fontSize: 16,
    color: '#666',
  },

  tNewsSource: {
    fontFamily: 'SVN-Gilroy Medium',
  },

  fimgNewsThumbnail: {
    width: 120,
    height: 70,
    borderRadius: 10,
    overflow: 'hidden',
    marginLeft: 10,
  },
});
