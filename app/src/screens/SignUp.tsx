import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
    default: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        marginVertical: 8
    }
});

const ScreenContainer = ({ children }) => {
    return (
        <View style={styles.default}>
            {children}
        </View>
    );
};

export const SignUp = () => {
    return (
      <ScreenContainer>
        <Text>Create Account Screen</Text>
        <Button title='Sign Up' onPress={() => alert('todo!')} />
      </ScreenContainer>
    );
  };