import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  vNoti: {
    marginTop: 15,
  },

  vLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  tLabel: {},

  toSeeAll: {},

  tSeeAll: {},

  flNoti: {
    marginTop: 10,
  },

  thNotiItem: {
    marginBottom: 8,
    backgroundColor: '#E6E6E6',
    borderRadius: 4,
    overflow: 'hidden',
  },

  vNotiItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  vNotiItemContent: {
    flex: 1,
    backgroundColor: '#FFFBE8',
    paddingLeft: 10,
    paddingVertical: 3,
  },

  tNotiItemTitle: {
    fontFamily: 'SVN-Gilroy Medium',
    fontSize: 13,
  },

  tNotiItemContent: {
    fontFamily: 'SVN-Gilroy Regular',
    fontSize: 13,
  },

  vNotiItemTime: {
    backgroundColor: '#E6E6E6',
    // height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },

  tNotiItemTime: {},
});
