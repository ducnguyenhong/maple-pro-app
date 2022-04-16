import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  vHeader: {},

  imgbHeader: {
    height: 80,
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
    color: '#fff',
    fontSize: 20,
    padding: 15,
  },

  vHeaderRight: {
    flex: 1 / 3,
  },
});
