import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, StyleSheet, TouchableOpacity, TextInput, Dimensions, Text, Image } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'


const Login = () => {
    const Navigation = useNavigation();
    return (
        <SafeAreaProvider>
            <View style={styles.up}>
                <Image source={require('../assets/wave.jpg')} />
            </View>

            <View style={styles.login}>
                <Text style={styles.heading}>Welcome!</Text>
                <Text style={styles.subheading}>Signin to continue</Text>
                <View style={styles.inpbox}>
                    <TextInput style={styles.input}
                        placeholder='Enter registered mail' />
                    <TextInput style={styles.input} keyboardType='email-address'
                        placeholder='Enter password' />
                </View>

                <View style={styles.btncontainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text >Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.signbox}>
                    <Text>Don't have an account</Text>
                    <TouchableOpacity onPress={() => Navigation.navigate('signup')}>
                        <Text >Sign up</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Navigation.navigate('home')}>
                        <Text >home</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaProvider >
    )
}


const styles = StyleSheet.create({

    up: {
        height: 200,
        width: Dimensions.get('screen').width,
    },

    login: {
        flex: 1,
        display: 'flex',
        color: '#eae5e9',
        borderTopLeftRadius: 80,
        backgroundColor: 'white',
    },

    heading: {
        fontSize: 25,
        marginLeft: 50,
        marginTop: 50,
    },

    subheading: {
        fontSize: 18,
        marginLeft: 50,
        marginTop: 10,
    },

    input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        padding: 10,
        borderRadius: 5,
    },

    inpbox: {
        marginTop: 50,
    },

    btncontainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        marginTop: 25,
        backgroundColor: '#007bff',
        borderRadius: 25,
        paddingHorizontal: 100,
        paddingVertical: 8,
    },

    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    imgback: {
        flex: 1,
        objectFit: 'cover',
    },

    signbox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5,
    },
});

export default Login