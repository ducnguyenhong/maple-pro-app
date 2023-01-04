import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  vInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  vLeft: {},

  vDate: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 5,
  },

  tDate: {
    marginRight: 3,
    color: '#FFF',
    fontFamily: 'SVN-Gilroy Medium',
  },

  tSubDate: {
    fontSize: 12,
    marginLeft: 4,
    color: '#FFF',
  },

  vHello: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  tHello: {
    marginRight: 5,
    color: '#FFF',
    fontFamily: 'SVN-Gilroy Medium',
  },

  tName: {
    fontFamily: 'SVN-Gilroy SemiBold',
    color: '#FFF',
    textTransform: 'uppercase',
  },

  vWeather: {
    alignItems: 'center',
  },

  vLocale: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  tWeather: {
    marginLeft: 5,
  },

  tLocale: {},

  imgWeather: {
    height: 30,
    width: 50,
  },
});
