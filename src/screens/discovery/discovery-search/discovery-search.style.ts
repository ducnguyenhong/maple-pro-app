import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  vSearch: {
    borderWidth: 0.5,
    borderRadius: 100,
    overflow: 'hidden',
    borderColor: '#D9D9D9',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  toSearchLeft: {
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 10,
    paddingLeft: 15,
  },

  toSearchSpeed: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  tSearch: {
    color: '#828282',
    marginLeft: 8,
    fontFamily: 'HelveticaNeue',
    fontSize: 13,
  },
});
