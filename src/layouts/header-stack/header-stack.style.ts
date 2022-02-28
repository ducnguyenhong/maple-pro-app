import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  vHeader: {},

  imgHeader: {
    height: 80,
    width: '100%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },

  vHeaderContent: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    width: '100%',
  },

  vHeaderLeft: {
    position: 'absolute',
    top: 20,
    left: 10,
  },

  icBack: {
    paddingHorizontal: 20,
  },

  vHeaderCenter: {
    alignItems: 'center',
  },

  tTitle: {
    color: '#fff',
    // fontFamily: fonts.FontQsBold,
    fontSize: 17,
    padding: 15,
  },

  vHeaderRight: {},
});
