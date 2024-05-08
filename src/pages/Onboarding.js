import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


const Onboarding = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaProvider>

            <View style={{}}>
                <Image style={styles.img} source={require('../assets/homeon.jpg')} />
            </View>

            <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-around' }}>

                <View>
                    <Text style={styles.header}>Find your Home</Text>
                    <Text style={styles.subtext}>Rent a house at affordable price range,</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
    },

    img: { height: 400, objectFit: 'cover', borderBottomLeftRadius: 50, },
    header: { marginStart: 12, fontSize: 30, marginTop: 50, fontWeight: '700' },
    subtext: { marginStart: 12, fontSize: 16, marginTop: 5, fontWeight: '200' },
    button: {
        marginTop: 50,
        marginStart: 12,
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: Dimensions.get('screen').width - 24,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
})

export default Onboarding;