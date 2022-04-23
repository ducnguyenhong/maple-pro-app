import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  vHeader: {
    overflow: 'hidden',
  },

  imgbHeader: {
    height: 70,
    width: '100%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },

  vHeaderContent: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },

  vHeaderLeft: {
    flex: 1 / 3,
  },

  icBack: {
    paddingLeft: 20,
  },

  vHeaderCenter: {
    flex: 1 / 3,
    alignItems: 'center',
  },

  tTitle: {
    color: '#FFF',
    fontSize: 18,
    padding: 15,
    fontFamily: 'SVN-Gilroy Medium',
  },

  vHeaderRight: {
    flex: 1 / 3,
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: '100%',
  },

  toSearch: {
    paddingHorizontal: 20,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
});
