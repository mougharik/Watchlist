import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { themes } from '../../context/ThemeContext';

export function Input({ style, placeholder, ...props }) {
  const [focused, setFocused] = useState(false);

  return (
    <TextInput {...props}
      style={[style, styles.input, focused ? { borderColor: themes.Dark.colors.primary } : {}]}
      placeholder={placeholder}
      placeholderTextColor={themes.Dark.colors.backgroundP50}
      keyboardAppearance={themes.Dark.dark ? 'dark' : 'light'}
      selectionColor='rgba(255, 114, 98, 0.65)'
      onFocus={() => { setFocused(true) }}
      onBlur={() => { setFocused(false) }}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: themes.Dark.colors.field,
    color: themes.Dark.colors.text,
    height: 36,
    borderRadius: 25,
    borderWidth: 1.2,
    borderColor: 'transparent',
    paddingVertical: 2,
    paddingHorizontal: 15,
  }
});
