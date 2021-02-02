import React, { useState } from 'react';
import { Dimensions, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { mix, useTransition } from 'react-native-redash';
import Animated, { Extrapolate, Easing } from 'react-native-reanimated';
import { Octicons, AntDesign } from '@expo/vector-icons';

import { themes } from '../context/ThemeContext';

const { interpolate } = Animated;
const { width } = Dimensions.get('window');

export const SearchBar = props => {
  const [focused, setFocused] = useState(false);
  const transition = useTransition(focused, {duration: 200, easing: Easing.ease});
  const focusedWidth = mix(transition, Math.floor(0.53 * width), width);
  const focusedBorderRadius = interpolate(transition, {
    inputRange: [0, 22 / 10],
    outputRange: [20, 0],
    extrapolate: Extrapolate.CLAMP
  });

  return (
    <> 
      <TouchableWithoutFeedback onFocus={() => { setFocused(true) }} onBlur={() => { setFocused(false) }}>
        <Animated.View style={[styles.searchBarContainer, { width: focusedWidth, borderRadius: focusedBorderRadius }]}>
          <Octicons name='search' color={themes.Dark.colors.backgroundP50} size={18} style={styles.searchIcon} />
          <TextInput {...props}
            style={ [styles.searchBar, focused ? { paddingLeft: 0 } : {}] }
            placeholder='Search'
            placeholderTextColor={themes.Dark.colors.backgroundP50}
            keyboardAppearance={themes.Dark.dark ? 'dark' : 'light'}
            selectionColor='rgba(255, 114, 98, 0.65)'
          />
          <TouchableWithoutFeedback onPress={() => {  Keyboard.dismiss() }}>
            <AntDesign 
              name='closecircle' 
              color='transparent'
              size={20} 
              style={[styles.closeIcon, focused ? {color: themes.Dark.colors.backgroundP50} : {} ]} />
          </TouchableWithoutFeedback>
        </Animated.View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    alignSelf:'center',
    height: 32,
    width: '53%',
    backgroundColor: themes.Dark.colors.field,
    borderRadius: 18,
    borderWidth: 1.2,
    borderColor: 'transparent',
    paddingHorizontal: 10,
    overflow: 'visible',
    shadowColor: 'rgba(0, 0, 0, 0.9)',
    shadowOffset: { width: 1, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  searchBar: {
    fontSize: 17,
    backgroundColor: 'transparent',
    color: themes.Dark.colors.backgroundP50,
    height: '95%',
    width: '92%',
    paddingVertical: 2,
    paddingLeft: 15,
  },
  searchIcon: {
    position: 'absolute',
    left: 15,
  },
  closeIcon: {
    position: 'absolute',
    right: 15,
  }
});
