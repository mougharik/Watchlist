import React from 'react';
import { View, StyleSheet } from 'react-native';

import { constStyles } from '../../constants/StyleStructure';
import { OutlineButton } from '../../components/misc/Buttons';
import { Input } from '../../components/misc/Input';

const Modal = ({ children }) => {
  return (
    <View style={constStyles.modalWrapper}>
      <View style={constStyles.handle} />
      <View style={constStyles.modal}>
        {children}
      </View>
    </View>
  );
}

export const SignUp = ({ navigation }) => {
  return (
    <Modal>
      <View style={[styles.default, { flexDirection: 'row' }]}>
        <Input
          style={[constStyles.input, { width: '48%' }]}
          placeholder={'First Name'}
          selectTextOnFocus
        />
        <Input
          style={[constStyles.input, { width: '48%' }]}
          placeholder={'Last Name'}
          selectTextOnFocus
        />
      </View>

      <View style={styles.default}>
        <Input
          placeholder={'Email'}
          style={constStyles.input}
          textContentType={'emailAddress'}
          keyboardType={'email-address'}
          selectTextOnFocus
        />
      </View>

      <View style={styles.default}>
        <Input
          placeholder={'Username'}
          style={constStyles.input}
          selectTextOnFocus
        />
      </View>

      <View style={styles.default}>
        <Input
          placeholder={'Password'}
          style={constStyles.input}
          selectTextOnFocus
          secureTextEntry
        />
      </View>

      <View style={styles.default}>
        <Input
          placeholder={'Re-type Password'}
          style={constStyles.input}
          selectTextOnFocus
          secureTextEntry
        />
      </View>
      <OutlineButton title='Sign Up' style={[constStyles.button, { width: 90 } ]} onPress={() => { navigation.pop() }} />
    </Modal>
  );
}


const styles = StyleSheet.create({
  default: {
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});