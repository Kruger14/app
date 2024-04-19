import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Person from '../assets/svg/Person';
import Currency from '../assets/svg/Currency';
import Homepin from '../assets/svg/Homepin';
import ArrowForward from '../assets/svg/ArrowForward';
import { useNavigation } from '@react-navigation/native';




const CardComponent = () => {
    const Navigation = useNavigation();
    return (
        <SafeAreaProvider>

            <View style={styles.cardContainer}>

                <View style={styles.imageContainer}>
                    <Image source={require('../assets/new.jpg')} style={styles.image} />
                </View>

                <View style={styles.info}>

                    <View style={styles.row}>
                        <Person height={25} width={25} />
                        <Text style={styles.name}>John</Text>
                    </View>

                    <View style={styles.row}>
                        <Currency height={25} width={25} />
                        <Text style={styles.text}>5000</Text>
                    </View>
                    <View style={styles.addressContainer}>
                        <Homepin height={25} width={25} />
                        <Text style={styles.address}>St 25, malibu point california lothkunta alwal 50025</Text>
                    </View>

                    <TouchableOpacity onPress={() => Navigation.navigate('detail')}>
                        <View style={styles.button}>
                            <ArrowForward height={25} width={25} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({


    cardContainer: {
        backgroundColor: 'white',
        elevation: 1,
        marginBottom: 10,
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 16,
        width: Dimensions.get('screen').width - 30,
    },

    imageContainer: {
        width: (Dimensions.get('screen').width - 30) / 2,
        borderRadius: 16,
        overflow: 'hidden',
    },

    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },

    info: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-between',
    },
    name: {
        color: 'black',
        fontSize: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: 'black',
        fontSize: 18,
        marginLeft: 5,
    },
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    address: {
        color: 'black',
        flexWrap: 'wrap',
        marginLeft: 5,
    },
    button: {
        borderRadius: 15,
        height: 50,
        width: 160,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },

})

export default CardComponent;