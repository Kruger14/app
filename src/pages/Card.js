import React from 'react';
import { Dimensions, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Homepin from '../assets/svg/Homepin';
import Currency from '../assets/svg/Currency';
import ArrowForward from '../assets/svg/ArrowForward';

const Card = () => {
    return (
        <View style={styles.cardContainer}>

            <View style={styles.imageContainer}>
                <Image source={require('../assets/new.jpg')} style={styles.image} />
            </View>

            <View style={styles.info}>
                <Text style={styles.name}>John doe</Text>
                <View style={styles.row}>
                    <Currency height={25} width={25} />
                    <Text style={styles.text}>5000</Text>
                </View>
                <View style={styles.addressContainer}>
                    <Homepin height={25} width={25} />
                    <Text style={styles.address}>St 25, malibu point california lothkunta alwal 50025</Text>
                </View>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <ArrowForward height={25} width={25} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    cardContainer: {
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 16,
        width: Dimensions.get('screen').width - 30,
    },

    imageContainer: {
        width: (Dimensions.get('screen').width - 30) / 2,
        borderRadius: 16,
        overflow: 'hidden', // to ensure the border radius is applied correctly
    },

    image: {
        width: '100%',
        height: 200, // Adjust height as needed
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
});

export default Card;
