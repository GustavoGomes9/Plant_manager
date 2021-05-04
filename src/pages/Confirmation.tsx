import React from 'react';
import {StyleSheet, View, SafeAreaView, Text} from 'react-native';
import {Button} from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';

export function Confirmation(){
    const navigation = useNavigation();

    function handleSubmit(){
        navigation.navigate('Welcome')
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    😍
                </Text>
                <Text style={styles.title}>
                    Prontinho
                </Text>
                <Text style={styles.subtitle}>
                    Agora vamos começar a cuidar de suas
                    plantinhas com muito cuidado.
                </Text>
                <View style={styles.footer}>
                    <Button
                        title="Confirmar" 
                        onPress={handleSubmit}
                    />
                </View>
            </View>
           
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%'
    },
    content: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'

    },
    form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 54
    },
    emoji: {
        fontSize: 72
    },
    title: {
        fontFamily: fonts.heading,
        fontSize: 22,
        color: colors.heading,
        textAlign: 'center',
        marginTop: 15,
        lineHeight: 38

    },
    subtitle: {
        fontFamily: fonts.text,
        fontSize: 17,
        color: colors.heading,
        textAlign: 'center',
        paddingVertical: 20

    },
    footer: {
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 70

    }
})