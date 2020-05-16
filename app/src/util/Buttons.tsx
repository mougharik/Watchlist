import React from 'react';
import { LinearGradient} from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { themes } from '../context/ThemeContext';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    text: {
        color: '#F7A399',
        fontSize: 14,
    },
    signIn: {
        color: '#F7A399',
        backgroundColor: themes.Dark.colors.background,
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

});

function TextButton({title, style, onPress}) {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

function OutlineButton({title, style, onPress}) {
    return (
        <TouchableOpacity style={style} onPress={onPress}>
            <LinearGradient
                start={[0.0, 0.5]}
                end={[1, 0.5]}
                colors={['#F7A399', '#F9B5AA', '#FBC7BB', '#FBF5F3']}
                style={styles.linearGradient}>
            <View style={styles.circleGradient}>
                <Text style={styles.signIn}>
                    {title}
                </Text>
            </View>
            </LinearGradient>
        </TouchableOpacity>
    );
};

export {TextButton, OutlineButton};