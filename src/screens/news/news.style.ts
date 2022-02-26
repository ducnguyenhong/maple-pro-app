import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  vNews: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 100,
    backgroundColor: '#F3F3F3',
  },

  vMapple: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  imgMapple: {
    height: 50,
    width: 50,
  },

  tMapple: {
    fontSize: 20,
    marginLeft: 10,
  },

  vNewsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
    width: '100%',
  },

  toNewsItem: {
    width: '50%',
    alignItems: 'center',
    height: '33%',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderRightWidth: 0.5,
    justifyContent: 'center',
    padding: 20,
    borderColor: '#FFF',
  },

  imgNewsItem: {
    width: '100%',
    height: 50,
  },

  tNewsItem: {},
});
