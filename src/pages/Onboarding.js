import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


const Onboarding = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaProvider>
            <View style={styles.mainvu}>
                <View style={styles.imgvu}>
                    <Image style={styles.img} source={require('../assets/searchhome.png')} />
                </View>

                <View style={styles.subvu}>
                    <Text style={styles.headtext}>Find to a rent House</Text>
                    <Text style={styles.line}></Text>
                    <Text style={styles.subtext}>Rent a house at affordable price range </Text>
                    <Text style={styles.subtext}>from your phone with Rentit</Text>
                </View>


                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Get started</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </SafeAreaProvider >
    )
}


const styles = StyleSheet.create({

    mainvu: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    imgvu: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
        borderRadius: 111110,
    },

    img: {
        objectFit: 'cover',
        borderRadius: 100,
        height: 400,
        width: Dimensions.get('screen').width,
        // borderWidth: 1,
        // borderColor: 'black',
    },

    subvu: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },

    headtext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },

    subtext: {
        fontSize: 15,
        fontWeight: '500',
        color: 'white',
    },

    line: {
        height: 2,
        width: 40,
        backgroundColor: 'black',
        marginTop: 15,
        marginBottom: 15,
    },

    button: {
        marginTop: 50,
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
})

export default Onboarding;