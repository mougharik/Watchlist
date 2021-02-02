import React from 'react';
import { SafeAreaView, View, StyleSheet, Button } from 'react-native';
import { constStyles } from '../../constants/StyleStructure';

const styles = StyleSheet.create({

});

const ScreenContainer = ({ children }) => {
  return (
    <SafeAreaView style={constStyles.safearea}>
      <View style={constStyles.default}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export const Return = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Button title={'AAAHHHH'} onPress={() => alert('todo!')} />
    </ScreenContainer>
  );
};