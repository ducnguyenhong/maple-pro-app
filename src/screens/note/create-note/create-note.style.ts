import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  vMain: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 15,
  },

  vInput: {},

  vInpTitle: {},

  tLabel: {
    fontSize: 16,
    marginBottom: 8,
  },

  inpTitle: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    fontSize: 16,
    color: '#4F4F4F',
    paddingHorizontal: 15,
  },

  vInpContent: {
    marginTop: 20,
  },

  inpContent: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    fontSize: 16,
    color: '#4F4F4F',
    paddingHorizontal: 15,
    textAlignVertical: 'top',
  },

  tContentError: {
    color: '#F41515',
    marginTop: 4,
  },

  toCreate: {
    alignItems: 'center',
    marginTop: 20,
  },

  tCreate: {
    backgroundColor: 'orange',
    color: '#FFF',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
    fontSize: 16,
  },
});
