import React from 'react';
import { View, Text, StyleSheet, Button, Image} from 'react-native';
import { Input } from '../util/Input';
import { TextButton, OutlineButton } from '../util/Buttons';

const styles = StyleSheet.create({
    default: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        marginVertical: 8
    },
    login: {
      paddingTop: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    signUp: {
      paddingBottom: 50,
    }
});

const ScreenContainer = ({ children }) => {
    return (
      <View style={styles.default}>
          {children}
      </View>
    );
};

export const Login = ({ navigation }) => {
    return (
      <ScreenContainer>
        <View style={{ paddingTop: 150, width: '100%'}}>
          <Image
            style={{ width: 131, height: 147, overflow: 'visible', alignSelf: 'center'}}
            source={{ uri: '/Users/mougharik/Code/Git/Watchlist/app/assets/logo.png' }}
          />
          <View style={styles.login}>
            <Input 
              style={styles.input} 
              placeholder={'Username'} 
            />
            <Input 
              style={styles.input}
              placeholder={'Password'}
              secureTextEntry />
            <OutlineButton style={styles.input} title={'Sign In'} onPress={() => alert('todo!')} />
          </View>
        </View>
       
        <View>
          <TextButton
            style={styles.signUp}
            title={'Don\'t have an account yet? Sign Up'}
            onPress={() => navigation.push('SignUp')}
          />
        </View>
       
      </ScreenContainer>
    );
  };