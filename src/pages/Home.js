import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, TextInput, Image, Dimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Search from '../assets/svg/Search';
import Menu from '../assets/svg/Menu';
import Person from '../assets/svg/Person';
import Currency from '../assets/svg/Currency';
import Homepin from '../assets/svg/Homepin';
import ArrowForward from '../assets/svg/ArrowForward';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

    const Navigation = useNavigation();

    const Card = () => {
        return (
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
        )
    }

    const data = ['villa', 'community', 'apartment', 'apartment', 'apartment', 'apartment']
    return (
        <SafeAreaProvider>
            <View style={styles.home}>
                <View style={styles.menubtn}>
                    <TouchableOpacity>
                        <Menu height={25} width={25} />
                    </TouchableOpacity>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.greet}>Hello, John</Text>
                        <Text style={styles.subheading}>Discover</Text>
                    </View>

                    <View>
                        <Person height={25} width={25} />
                    </View>

                </View>

                <View style={styles.searchbarcontainer}>
                    <TextInput
                        placeholder="Search"
                        style={{ flex: 1, }}
                    />
                    <TouchableOpacity style={styles.searchicon}>
                        <Search height={25} width={25} />
                    </TouchableOpacity>
                </View>


                {/* <ScrollView horizontal={true} style={{ height: 100 }}>
                    <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>
                        {data.map((item, index) => (
                            <View style={{
                                height: 30, marginLeft: 15, width: 100, backgroundColor: 'blue',
                                borderRadius: 15, justifyContent: 'center', alignItems: 'center'
                            }} key={index}>
                                <Text style={{ color: 'white' }}>{item}</Text>
                            </View>
                        ))}
                    </View>
                </ScrollView> */}



                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ marginTop: 15, alignItems: 'center', }}>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </View>
                </ScrollView>

            </View >

        </SafeAreaProvider >
    )
}

const styles = StyleSheet.create({


    // card starts
    cardContainer: {
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

    //card ends


    home: {
        flex: 1,
        marginLeft: 12,
        marginRight: 12,
    },

    menubtn: {
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginTop: 12,
    },

    greet: {
        fontSize: 12,
    },

    subheading: {
        fontSize: 25,
    },

    scview: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        borderRadius: 12,
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 15,
    },

    itemscview: {
        color: 'white',
    },

    searchbarcontainer: {
        paddingLeft: 15,
        padding: 1,
        marginTop: 10,
        borderColor: 'black',
        borderRadius: 18,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.8,
        marginEnd: 5,
        marginStart: 5,
    },

    searchicon: {
        marginRight: 10,
        borderRadius: 16,
    },


})

export default Home;