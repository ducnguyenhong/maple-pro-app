import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  vNews: {
    position: 'relative',
    borderTopWidth: 0.5,
    borderColor: '#E6E6E6',
    paddingTop: 15,
    overflow: 'hidden',
  },

  vLoading: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 5,
    height: 415,
    backgroundColor: '#FFF',
    paddingTop: 40,
    alignItems: 'center',
  },

  tLoading: {
    marginTop: 20,
    fontFamily: 'SVN-Gilroy Medium',
    fontSize: 15,
  },

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
    textAlign: 'justify',
  },

  tNewsSource: {
    fontFamily: 'SVN-Gilroy Medium',
    marginTop: 3,
  },

  fimgNewsThumbnail: {
    width: 120,
    height: 70,
    borderRadius: 10,
    overflow: 'hidden',
    marginLeft: 20,
  },
});
