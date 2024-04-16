import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import ArrowBack from '../assets/svg/ArroBack';
import Close from '../assets/svg/Close';
import Person from '../assets/svg/Person';
import Homepin from '../assets/svg/Homepin';
import Currency from '../assets/svg/Currency';
import Bed from '../assets/svg/Bed';
import Bathroom from '../assets/svg/Bathroom';
import Localparking from '../assets/svg/Localparking';
import Balcony from '../assets/svg/balcony';
import Sms from '../assets/svg/Sms';
import Whatsapp from '../assets/svg/Whatsapp';
import { useNavigation } from '@react-navigation/native';

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

                <TouchableOpacity>
                    <View>
                        {/* <Image source={require('../assets/close.png')} /> */}
                        <Close height={25} width={25} />
                    </View>
                </TouchableOpacity>
            </View>
            {/* appbar end*/}


            <View style={styles.imgcont}>
                <Image style={styles.img} source={require('../assets/new.jpg')} />
            </View>



            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.desccont}>
                    <Text>Description:</Text>
                    <Text>The error you're encountering, "Invariant Violation: requireNativeComponent: 'RNCAndroidDialogPicker'
                        was not found in the UIManager", suggests that there might be an issue with the installation or linking
                        of the @react-native-picker/picker package, especially if you're working on an Android platform.</Text>
                </View>

                <Text style={styles.specheader}>Owner info</Text>
                {/* ownerinfobox start */}
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

                    <View style={styles.infoItem}>
                        {/* <Image style={styles.infoIcon} source={require('../assets/currency.png')} /> */}
                        <Currency height={25} width={25} />
                        <Text style={styles.infoText}>hyderabad</Text>
                    </View>

                </View>

                {/* specificationstart */}
                <Text style={styles.specheader}>Specification</Text>
                <View style={styles.specification}>
                    <View style={styles.specItem}>
                        {/* <Image style={styles.specIcon} source={require('../assets/bed.png')} /> */}
                        <Bed height={25} width={25} />
                        <Text style={styles.specText}>5</Text>
                    </View>
                    <View style={styles.specItem}>
                        <Bathroom height={25} width={25} />
                        {/* <Image style={styles.specIcon} source={require('../assets/bathroom.png')} /> */}
                        <Text style={styles.specText}>5</Text>
                    </View>
                    <View style={styles.specItem}>
                        <Localparking height={25} width={25} />
                        {/* <Image style={styles.specIcon} source={require('../assets/local_parking.png')} /> */}
                        <Text style={styles.specText}>5</Text>
                    </View>
                    <View style={styles.specItem}>
                        <Balcony height={25} width={25} />
                        {/* <Image style={styles.specIcon} source={require('../assets/balcony.png')} /> */}
                        <Text style={styles.specText}>5</Text>
                    </View>
                </View>
                {/* specification ends */}



                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around', alignItems: 'center',
                }}>
                    <TouchableOpacity>
                        <Sms height={25} width={25} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Whatsapp />
                    </TouchableOpacity>
                </View>


            </ScrollView>
        </SafeAreaProvider >
    );
}


const styles = StyleSheet.create({

    appbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginEnd: 15,
        marginStart: 15,
        height: 40,
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
        marginVertical: 5,
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