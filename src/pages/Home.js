import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, TextInput } from 'react-native';
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
            <View style={styles.appbar}>
                <TouchableOpacity onPress={() => Navigation.navigate('profile')}>
                    <Menu height={25} width={25} />
                </TouchableOpacity>

                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={styles.subheading}>Discover</Text>
                </View>

                <TouchableOpacity onPress={() => Navigation.navigate('like')}>
                    <View>
                        <Favorite height={25} width={25} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.home}>

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


                {/* <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ height: 100 }}>
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
    home: {
        flex: 1,
        backgroundColor: 'white',
    },

    appbar: {
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingStart: 12,
        paddingEnd: 12,
    },

    greet: {
        fontSize: 12,
        color: 'black',
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