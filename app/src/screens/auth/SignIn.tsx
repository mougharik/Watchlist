import React, { useState, useEffect } from 'react';
import {  
  View, 
  Image, 
  Keyboard,
  StyleSheet, 
  TouchableWithoutFeedback
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated from 'react-native-reanimated';


import { Error } from '../../components/misc/Error';
import { Input } from '../../components/misc/Input';
import { TextButton, OutlineButton } from '../../components/misc/Buttons';
import { constStyles } from '../../constants/StyleStructure';

const {  Extrapolate, Value, interpolate, } = Animated;

const ScreenContainer = ({ children }) => {
  return (
    <SafeAreaView style={ constStyles.safearea }>
      <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
        <View style={ constStyles.default }>
          { children }
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>  
  );
}

export const SignIn = ({ navigation }) => {
  const [valid, setValid] = useState(false);
  const [error, setError] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  useEffect(() => {
      setValid( (username != '' && password != '') );
  }, [username, password]);


  //const validate  
  return (
    <ScreenContainer>
      <View style={ styles.signInContainer }>
        <Image
          style={{ width: 131, height: 147, overflow: 'visible', alignSelf: 'center'}}
          source={{ uri: '/Users/mougharik/Code/Git/Watchlist/app/assets/logo.png' }}
        />
        <View style={ styles.signIn }>
          <Input
            style={ [styles.input, { width: '55%' }] } 
            placeholder={ 'Username' }
            textContentType='username'
            onChangeText={(text: string) => { setUsername(text); setError(false) }}
          />
          <Input
            style={ [styles.input, { width: '55%' }] }
            placeholder={ 'Password' }
            textContentType='password'
            onChangeText={(text: string) => { setPassword(text); setError(false) }}
            secureTextEntry 
          />
          {error ? <Error text={'Invalid credentials.'} /> : <></> }
          <OutlineButton style={ styles.input } title={ 'Sign In' } onPress={() => { valid ? navigation.replace('Tabs') : setError(true) }}/>
        </View>
      </View>
      
      <View>
        <TextButton
          title={ 'Don\'t have an account yet? Sign Up' }
          onPress={() => { navigation.push('SignUp') }}
        />
      </View>
    </ScreenContainer>
  );
}


const styles = StyleSheet.create({
  signInContainer: {
    marginTop: 100, 
    width: '100%' 
  },
  signIn: {
    marginTop: 60,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginVertical: 8
  }
});