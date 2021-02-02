import { StyleSheet } from 'react-native';

import { themes } from '../context/ThemeContext';

export const constStyles = StyleSheet.create({
  safearea: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  default: {
    height: '100%',
    width: '95%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    fontSize: 13,
    marginVertical: 8,
    width: '100%'
  },
  button: {
    alignSelf: 'center',
    marginVertical: 8
  },
  modalWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 60,
    backgroundColor: themes.Dark.colors.background,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    shadowColor: 'rgba(0, 0, 0, 0.9)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 18
  },
  modal: {
    width: '65%'
  },
  handle: {
    alignSelf: 'center',
    top: 8,
    width: 80,
    height: 5,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginTop: 10,
    marginBottom: 100
  },
  currentIcon: {
    alignSelf: 'center',
    width: 5,
    height: 5,
    borderRadius: 20,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    marginTop: 3,
  },
  shadow: {
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3
  }
});