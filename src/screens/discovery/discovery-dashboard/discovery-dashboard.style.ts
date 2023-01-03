import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  vDashboard: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  toItem: {
    marginBottom: 20,
    width: '47%',
    borderRadius: 15,
    padding: 15,
    overflow: 'hidden',
  },

  vTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  vIcon: {
    width: 36,
    height: 36,
    borderRadius: 100,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },

  imgIcon: {
    width: 22,
    height: 22,
    overflow: 'hidden',
  },

  tSubTitle: {
    textAlign: 'right',
    color: '#828282',
    marginTop: 10,
    fontFamily: 'SVN-Gilroy Medium',
  },

  tTitle: {
    fontSize: 24,
    fontFamily: 'SVN-Gilroy SemiBold',
  },
});
