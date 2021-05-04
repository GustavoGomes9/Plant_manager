import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView} from 'react-native';

import colors from '../styles/colors';
import wateringImg from '../assets/watering.png'
import {Feather} from '@expo/vector-icons'
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';

export function Welcome(){
const navigation = useNavigation();

function handleSubmit(){
    navigation.navigate('User')
}
    return(
        <SafeAreaView style={style.container}>
            <View style={style.wrapper}>
                <Text style={style.mainTitle}>
                    Gerencie {'\n'}
                    suas plantas de {'\n'} 
                    forma facíl
                </Text>

                <Image 
                source={wateringImg}
                style={style.wateringImg} 
                resizeMode='contain'
                />

                <Text style={style.subtitle}>
                    Não esqueça de regar suas plantas. {'\n'}
                    Nós cuidamos de lembrar você sempre que precisar.
                </Text>

                <TouchableOpacity 
                style={style.button} 
                activeOpacity={0.6}
                onPress={handleSubmit}
                >
                    <Text>
                        <Feather name="chevron-right" style={style.buttonText} ></Feather>
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    wrapper:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    mainTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 38,
        lineHeight: 30,
        color: colors.heading,
        fontFamily: fonts.heading
    },
    wateringImg: {
        height: Dimensions.get('window').width * 0.6
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 25,
        width: 56,
        height: 56
    },
    buttonText: {
        color: colors.white,
        fontSize: 32
    }
})
