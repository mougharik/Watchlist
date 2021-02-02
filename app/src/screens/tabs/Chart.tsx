import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { constStyles } from '../../constants/StyleStructure';

const styles = StyleSheet.create({

});

const ScreenContainer = ({ children }) => {
  return (
    <SafeAreaView style={ [constStyles.safearea, {paddingBottom: 0}]}>
      <View style={[constStyles.default, {flex: 1}]}>
        {children}
      </View>
    </SafeAreaView>
  );
};
export const Chart = ({ navigation }) => {
  return (
    <ScreenContainer>
      <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,.4)', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <View style={{position: 'absolute', top: 0, left:100, backgroundColor: 'rgba(250,250,250,.9)', height: '100%', width: 50}}>
          <View style={{position: 'absolute', top: 10, left: 10, backgroundColor: 'red', height: 10, width: 10}} />
          <View style={{position: 'absolute', top: 10, right: 10, backgroundColor: 'red', height: 10, width: 10}} />
        </View>
        <View style={{position: 'absolute', top: 0, left:0, backgroundColor: 'rgba(250,250,250,.9)', height: '100%', width: 50}}>
          <View style={{position: 'absolute', top: 10, left: 10, backgroundColor: 'red', height: 10, width: 10}} />
          <View style={{position: 'absolute', top: 10, right: 10, backgroundColor: 'red', height: 10, width: 10}} />
        </View>
      </View>
      <View style={{flex: 14, backgroundColor: 'rgba(100,150,150,.5)', width: '100%'}}/>
    </ScreenContainer>
  );
};