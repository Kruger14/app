import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, TextInput, Image, Dimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Search from '../assets/svg/Search';
import Menu from '../assets/svg/Menu';
import CardComponent from './CardComponent';
import { useNavigation } from '@react-navigation/native';
import Favorite from '../assets/svg/Favorite';

const Home = () => {

    const [search, setsearch] = useState("");
    const Navigation = useNavigation();

    const handlesearch = (input) => {
        setsearch(input);
    }



    const data = ['villa', 'community', 'apartment', 'apartment', 'apartment', 'apartment']

    return (
        <SafeAreaProvider>
            <View style={styles.home}>
                <View style={styles.appbar}>
                    <TouchableOpacity onPress={() => Navigation.navigate('profile')}>
                        <Menu height={25} width={25} />
                    </TouchableOpacity>

                    <View>
                        <Text style={styles.greet}>Hello, John</Text>
                        <Text style={styles.subheading}>Discover</Text>
                    </View>

                    <TouchableOpacity onPress={() => Navigation.navigate('like')}>
                        <View>
                            <Favorite height={25} width={25} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.searchbarcontainer}>
                    <TextInput
                        placeholder="Search"
                        style={{ flex: 1, }}
                        onChangeText={handlesearch}
                    />
                    <TouchableOpacity onPress={() => (handlesearch)} style={styles.searchicon}>
                        <Search height={25} width={25} />
                    </TouchableOpacity>
                </View>

                {/* 
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ height: 100 }}>
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
                        <CardComponent />
                        <CardComponent />
                    </View>
                </ScrollView>

            </View >

        </SafeAreaProvider >
    )
}

const styles = StyleSheet.create({


    // card starts
    cardContainer: {
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

    //card ends


    home: {
        flex: 1,
        backgroundColor: 'white',
    },

    appbar: {
        elevation: 5,
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginTop: 12,
        paddingStart: 12,
        paddingEnd: 12,
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
        marginEnd: 12,
        marginStart: 12,
    },

    searchicon: {
        marginRight: 10,
        borderRadius: 16,
    },


})

export default Home;