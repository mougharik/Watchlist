import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { timing } from 'react-native-redash';

import { themes } from '../../context/ThemeContext';

const {Value, Clock, useCode, cond, eq, block, set, onChange } = Animated;

export const Error = ({ text }) => {
  return (
    <>
      <Animated.Text style={styles.error}>{text}</Animated.Text>
    </>
  );
}

const styles = StyleSheet.create({
  error: {
    color: themes.Dark.colors.red,
    fontSize: 13
  }
});