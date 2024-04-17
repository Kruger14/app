import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import ArrowBack from '../assets/svg/ArroBack';
import Person from '../assets/svg/Person';
import Homepin from '../assets/svg/Homepin';
import Currency from '../assets/svg/Currency';
import Bed from '../assets/svg/Bed';
import Bathroom from '../assets/svg/Bathroom';
import Localparking from '../assets/svg/Localparking';
import Balcony from '../assets/svg/balcony';
import { useNavigation } from '@react-navigation/native';
import Favorite from '../assets/svg/Favorite';

const Detail = () => {
    const navigation = useNavigation();


    return (
        <SafeAreaProvider>
            {/* appbar */}
            <View style={styles.appbar}>
                <TouchableOpacity onPress={() => navigation.navigate('home')}>
                    <View>
                        <ArrowBack height={25} width={25} />
                    </View>
                </TouchableOpacity>

                <View>
                    <Text style={{ fontSize: 12, }}>Details</Text>
                </View>

                <TouchableOpacity>
                    <View>
                        <Favorite height={25} width={25} />
                    </View>
                </TouchableOpacity>
            </View>
            {/* appbar end*/}

            {/* carousel */}
            <ScrollView style={{ marginTop: 20, }} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.item}>
                    <Image
                        source={require('../assets/new.jpg')}
                        style={styles.image}
                    />
                </View>

                <View style={styles.item}>
                    <Image
                        source={require('../assets/new.jpg')}
                        style={styles.image}
                    />
                </View>
            </ScrollView>
            {/* carousel */}


            <ScrollView style={{
                backgroundColor: 'white', borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
            }} showsVerticalScrollIndicator={false}>

                {/* headerstart */}
                <View style={{
                    marginTop: 10,
                    height: 40, flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{ fontSize: 14, }}>1 bhk excellent apartment for rent</Text>
                </View>
                {/* headerstart */}

                <View style={styles.desccont}>
                    <Text style={{ fontSize: 18, fontWeight: '900', }}>Description:</Text>
                    <Text>The error you're encountering, "Invariant Violation: requireNativeComponent: 'RNCAndroidDialogPicker'
                        was not found in the UIManager", suggests that there might be an issue with the installation or linking
                        of the @react-native-picker/picker package, especially if you're working on an Android platform.</Text>
                </View>

                {/* ownerinfobox start */}
                <Text style={styles.specheader}>Owner info</Text>
                <View style={styles.ownerinfobox}>

                    <View style={styles.infoItem}>
                        {/* <Image style={styles.infoIcon} source={require('../assets/person.png')} /> */}
                        <Person height={25} width={25} />
                        <Text style={styles.infoText}>hi</Text>
                    </View>

                    <View style={styles.infoItem}>
                        <Homepin height={25} width={25} />
                        {/* <Image style={styles.infoIcon} source={require('../assets/pin.png')} /> */}
                        <Text style={styles.infoText}>hyderabad</Text>
                    </View>
                </View>

                {/* specificationstart */}
                <Text style={styles.specheader}>Specification</Text>
                <View style={styles.specification}>
                    <View style={styles.specItem}>
                        {/* <Image style={styles.specIcon} source={require('../assets/bed.png')} /> */}
                        <Bed height={25} width={25} />
                        <Text style={styles.specText}>2</Text>
                    </View>
                    <View style={styles.specItem}>
                        <Bathroom height={25} width={25} />
                        {/* <Image style={styles.specIcon} source={require('../assets/bathroom.png')} /> */}
                        <Text style={styles.specText}>3</Text>
                    </View>
                    <View style={styles.specItem}>
                        <Localparking height={25} width={25} />
                        {/* <Image style={styles.specIcon} source={require('../assets/local_parking.png')} /> */}
                        <Text style={styles.specText}>Yes</Text>
                    </View>
                    <View style={styles.specItem}>
                        <Balcony height={25} width={25} />
                        {/* <Image style={styles.specIcon} source={require('../assets/balcony.png')} /> */}
                        <Text style={styles.specText}>1</Text>
                    </View>
                </View>


                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 15,
                }}>
                    <View style={{
                        height: 40, width: 150, backgroundColor: 'red',
                        borderRadius: 21, justifyContent: 'center', alignItems: 'center',
                    }}>
                        <TouchableOpacity>
                            <Text style={styles.btnstyle}>Get Details</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaProvider >
    );
}


const styles = StyleSheet.create({

    //get btn
    btn: {
        height: 40, width: 150,
        backgroundColor: 'red',
        borderRadius: 21, justifyContent: 'center', alignItems: 'center',
    },


    btnstyle: {
        color: 'white',
        fontSize: 15,
    },
    //get btn

    // carousel starts here
    item: {
        width: Dimensions.get('screen').width, // Set width according to your item's size
        height: 300, // Set height according to your item's size
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'scale-down',
        borderRadius: 5,
    },
    // carousel ends here

    appbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginStart: 15,
        marginTop: 10,

    },

    imgcont: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    img: {
        height: 300,
        width: Dimensions.get('screen').width - 20,
        marginTop: 20,
        borderRadius: 12,
        objectFit: 'cover',
    },

    desccont: {
        marginTop: 12,
        marginLeft: 12,
    },

    specheader: {
        fontSize: 18,
        marginTop: 10,
        marginLeft: 12,
        marginBottom: 5,
    },

    ownerinfobox: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        marginBottom: 5,
    },
    infoIcon: {
        height: 35,
        width: 35,
    },
    infoText: {
        marginLeft: 5,
    },

    specification: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    specItem: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    specIcon: {
        height: 35,
        width: 35,
    },
    specText: {
        marginTop: 5, // Adjust this value as needed for spacing between image and text
    },
});
export default Detail;