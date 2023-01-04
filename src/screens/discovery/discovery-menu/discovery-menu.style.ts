import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  vMenu: {
    paddingHorizontal: 15,
    paddingTop: 10,
    borderWidth: 0.5,
    borderRadius: 10,
    margin: 15,
    borderColor: '#e6e6e6',
    marginTop: 20,
  },

  ccMenu: {
    justifyContent: 'space-between',
    width: '100%',
  },

  toItem: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: '25%',
    marginBottom: 10,
  },

  vItem: {
    width: 50,
    height: 50,
    borderRadius: 100,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tItem: {
    fontFamily: 'SVN-Gilroy Medium',
    fontSize: 14,
    marginTop: 3,
    color: '#737373',
  },

  imgItem: {
    width: 25,
    height: 25,
  },
});
