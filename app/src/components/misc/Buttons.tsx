import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';

import { themes } from '../../context/ThemeContext';

const { Value } = Animated;

export function TextButton({ title, onPress, style={} }) {
  return (
    <TouchableOpacity style={ [styles.container, style] } onPress={onPress}>
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export function OutlineButton({ title, style, onPress }) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <LinearGradient
        start={ [0.0, 0.1] }
        end={ [0.8, 0.1] }
        colors={ [themes.Dark.colors.primary, themes.Dark.colors.primaryP50, themes.Dark.colors.text] }
        style={styles.linearGradient}>
        <View style={styles.circleGradient}>
          <Text style={styles.button}>
            {title}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}
/*
export const CardButton = () => {  
  const [open, setOpen] = useState(false);
  const scale = useRef(new Animated.Value<number>(0)).current;

  
  return (
    <>
      <TouchableWithoutFeedback onPress={() => }>
        <Animated.View style={[styles.cardButton, {backgroundColor: pressed ? themes.Dark.colors.red : themes.Dark.colors.green}, rotation]}>
          <AntDesign name='pluscircleo' size={25} color={themes.Dark.colors.text} />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => alert('true')}>
        <Animated.View style={[styles.cardButton, styles.secondaryButton]}>
          <AntDesign name='table' size={25} color={themes.Dark.colors.pink} />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => setPressed(true)} onBlur={() => setPressed(false)}>
        <Animated.View style={[styles.cardButton, styles.secondaryButton]}>
          <AntDesign name='areachart' size={25} color={themes.Dark.colors.pink} />
        </Animated.View>
      </TouchableWithoutFeedback>
    </>
  );
}
*/
const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10
  },
  text: {
    color: themes.Dark.colors.primaryP25,
    fontSize: 14,
  },
  button: {
    color: themes.Dark.colors.primaryP25,
    backgroundColor: 'transparent',
    margin: 4,
    paddingHorizontal: 6,
    textAlign: 'center',
    fontSize: 16
  },
  linearGradient: {
    borderRadius: 15,
  },
  circleGradient: {
    backgroundColor: themes.Dark.colors.background,
    margin: 1.5,    // change border width of gradient
    borderRadius: 15,
  },
  cardButtonContainer: {
    position: 'absolute',
    alignItems: 'center',
  },
  cardButton: {
    //position: 'absolute',
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButton: {
    backgroundColor: themes.Dark.colors.text,
    height: 38,
    width: 38,
    borderRadius: 38 / 2
  }
});