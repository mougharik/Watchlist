import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#FDF5F3',
        color: '#696A6F',
        width: '60%',
        height: 36,
        borderRadius: 25,
        paddingHorizontal: 15
    }
});

export function Input({style, placeholder, ...props}) {
    return <TextInput {...props} 
        style={[style, styles.input]} 
        placeholder={placeholder}
        placeholderTextColor={'#696A6F'} 
        />;
};
