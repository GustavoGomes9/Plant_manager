import React from 'react';
import {Text, TouchableOpacity, StyleSheet, TouchableOpacityProps} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({title, ...rest}: ButtonProps){
    return(
        <TouchableOpacity style={styles.button} activeOpacity={0.6}>
            <Text 
            style={styles.buttonText}
            {...rest}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.green,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        color: colors.white,
        fontFamily: fonts.heading
    }
})