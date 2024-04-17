import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Signup = () => {

    const Navigation = useNavigation();
    return (
        <SafeAreaProvider>
            <View>
                <View style={styles.up}>
                    <Image source={require('../assets/wave.jpg')} />
                </View>
            </View>

            <View style={styles.signup}>
                <Text style={styles.heading}>Looking for Rental house</Text>
                <Text style={styles.subheading}>Create a new account, find your home</Text>

                <View style={styles.formcontainer}>
                    <TextInput style={styles.input} placeholder='Enter name' />
                    <TextInput style={styles.input} placeholder='Enter mailid' />
                    <TextInput style={styles.input} placeholder='Enter password' />
                    <TextInput style={styles.input} placeholder='Enter retype password' />
                </View>

                <View style={styles.btncontainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Sign-in</Text>
                    </TouchableOpacity>

                    <View style={styles.alreadyhasbox}>
                        <Text style={{ marginRight: 5, }}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => Navigation.navigate('login')}><Text>Login</Text></TouchableOpacity>
                    </View>

                </View>
            </View>
        </SafeAreaProvider >
    )
}


const styles = StyleSheet.create({

    up: {
        height: 80,
        width: Dimensions.get('screen').width,
    },

    signup: {
        flex: 1,
        color: '#eae5e9',
        borderTopLeftRadius: 70,
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
        marginBottom: 20,
    },

    input: {
        height: 40,
        margin: 15,
        padding: 10,
        borderBottomWidth: 1, // Set the width of the bottom border
        borderBottomColor: 'black',
    },
    formcontainer: {

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

    alreadyhasbox: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
    },
})

export default Signup;