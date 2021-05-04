import React, {useState} from 'react';
import {StyleSheet, Text , SafeAreaView, View, TextInput, KeyboardAvoidingView} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts'
import {Button} from '../components/Button'

export function Useridentification(){
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    function handleInputBlur(){
        setIsFocused(false); 
        setIsFilled(!!name);
    }
    function handleInputFocus(){
        setIsFocused(true)
    }
    function handleInputChange(value: string){
        setIsFilled(!!value);
        setName(value);

    }
    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.form}>
                        <Text style={styles.emoji}>
                            🙃
                        </Text>
                        <Text style={styles.title}>
                            Como podemos {'\n'}
                            chamar você ?
                        </Text>
                        <TextInput 
                        style={[
                            styles.input,
                            (isFocused || isFilled) && {borderColor: colors.green}
                        ]}
                        placeholder="Digite seu nome"
                        onBlur={handleInputBlur}
                        onFocus={handleInputFocus}
                        onChangeText={handleInputChange}
                        />
                        
                        <View style={styles.footer}>
                            <Button  />
                        </View>
                    </View>  
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    content:{
        flex: 1,
        width: '100%'
    },
    form:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 54
    },
    emoji:{
        fontSize: 44
    },
    title: {
        textAlign: 'center',
        lineHeight: 32,
        fontSize: 24,
        color: colors.heading, 
        fontFamily: fonts.text,
        marginTop: 20
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20
    }
})