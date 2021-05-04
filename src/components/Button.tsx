import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Button(){
    return(
        <TouchableOpacity style={styles.button} activeOpacity={0.6}>
            <Text style={styles.buttonText}>
                Confirmar
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