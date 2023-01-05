import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  vMain: {
    backgroundColor: '#26ba55',
    position: 'relative',
    marginBottom: 70,
    height: 200,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },

  vNavigation: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginTop: 15,
  },

  vInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  vEventWrapper: {
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    bottom: -60,
    width: '100%',
  },

  vEventTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  toEventTitleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  imgIconEventTitle: {
    width: 20,
    height: 20,
  },

  imgIconCreateEvent: {
    width: 20,
    height: 20,
  },

  tEventTitle: {
    textTransform: 'uppercase',
    marginLeft: 8,
    fontFamily: 'SVN-Gilroy Medium',
    fontSize: 13,
    color: '#2a8948',
  },

  vEventMain: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },

  vEventTime: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  vEventHour: {
    backgroundColor: '#aa3caa',
    borderRadius: 12,
  },

  tEventHour: {
    color: '#FFF',
    fontSize: 26,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontFamily: 'SVN-Gilroy Medium',
  },

  tEventDay: {
    marginTop: 6,
  },

  vEventContent: {
    width: '58%',
  },

  tEventContent: {
    lineHeight: 18,
    marginRight: 20,
  },

  vEvent: {
    backgroundColor: '#FFF',
    width: '92%',
    padding: 12,
    borderRadius: 20,
    height: 150,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
