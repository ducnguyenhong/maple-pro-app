import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  vInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
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
  },

  tSubDate: {
    fontSize: 12,
    marginLeft: 4,
    color: '#828282',
  },

  vHello: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  tHello: {
    marginRight: 5,
  },

  tName: {
    fontFamily: 'SVN-Gilroy Medium',
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
