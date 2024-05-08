import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Person from '../assets/svg/Person';
import Currency from '../assets/svg/Currency';
import Homepin from '../assets/svg/Homepin';
import ArrowForward from '../assets/svg/ArrowForward';
import { useNavigation } from '@react-navigation/native';
import Favorite from '../assets/svg/Favorite';

const CardComponent = () => {
    const Navigation = useNavigation();
    return (
        <SafeAreaProvider>
            <View style={{ marginBottom: 10, marginTop: 10 }}>
                <View style={styles.container}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Image style={styles.image} source={require('../assets/new.jpg')} />
                        <Image style={styles.image} source={require('../assets/new.jpg')} />
                    </ScrollView>
                </View>

                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>1 bhk flat for rent in venkatapuram</Text>
                    <View style={styles.detailRow}>
                        <Person height={25} width={25} />
                        <Text style={styles.detailText}>Name of owner</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Homepin height={25} width={25} />
                        <Text style={styles.detailText}>Location</Text>
                    </View>
                </View>

                <View style={styles.footer}>
                    <View style={styles.footerLeft}>
                        <Currency height={25} width={25} />
                        <Text style={styles.price}>5000</Text>
                    </View>
                    <View style={styles.footerRight}>

                        <TouchableOpacity>
                            <View>
                                <Favorite height={25} width={25} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => Navigation.navigate('detail')}>
                            <ArrowForward height={25} width={25} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: Dimensions.get('screen').width - 15,
        borderWidth: 1,
        flexDirection: 'column',
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
    },
    image: {
        height: 200,
        width: Dimensions.get('screen').width - 15,
        borderWidth: 1,
        flexDirection: 'column',
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
    },
    detailsContainer: {
        height: 100,
        borderWidth: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        paddingStart: 10,
        justifyContent: "space-evenly",
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 15,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detailText: {
        fontSize: 12,
        marginStart: 5,
    },
    footer: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingStart: 10,
        paddingEnd: 10,
        borderWidth: 1,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        backgroundColor: 'lightgrey',
    },
    footerLeft: {
        flexDirection: 'row',
    },
    price: {
        fontSize: 18,
        marginStart: 5,
    },
    footerRight: {
        flexDirection: 'row',
        width: 100,
        justifyContent: 'space-between',

    },
});

export default CardComponent;
