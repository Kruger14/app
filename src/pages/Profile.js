import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ArrowBack from '../assets/svg/ArroBack';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {

    const Navigation = useNavigation();

    return (
        <SafeAreaProvider>
            <View style={styles.view1}>
                <TouchableOpacity onPress={() => Navigation.navigate('home')}>
                    <View style={styles.view2}>
                        <ArrowBack height={25} width={25} />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.view3}>

                <View style={styles.view4}>
                    <Image source={require('../assets/dharshini.jpg')} style={styles.image} />
                    <Text style={styles.text}>Owner name</Text>
                </View>

                <View style={styles.view5}>

                    <View style={styles.view6}>
                        <TouchableOpacity>
                            <View style={styles.touchableOpacity}>
                                <Text style={styles.buttonText}>Home</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.view6}>
                        <TouchableOpacity>
                            <View style={styles.touchableOpacity}>
                                <Text style={styles.buttonText}>Post an AD</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.view6}>
                        <TouchableOpacity>
                            <View style={styles.touchableOpacity}>
                                <Text style={styles.buttonText}>Saved</Text>
                            </View>
                        </TouchableOpacity>
                    </View>


                </View>

            </View>

        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    view1: {
        elevation: 4,
        height: 50,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    view2: {
        marginStart: 12,
    },
    view3: {
        backgroundColor: 'green',
        flex: 1,
        zIndex: 1,
        justifyContent: 'space-between',
    },
    view4: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    view5: {
        height: Dimensions.get('screen').height / 2,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: 'white',
        paddingTop: 25,
    },

    view6: {
        marginEnd: 5,
        marginStart: 5,
    },
    image: {
        borderColor: 'white',
        borderWidth: 5,
        height: 120,
        width: 120,
        borderRadius: 100,
        backgroundColor: 'black',
    },
    text: {
        marginTop: 5,
        color: 'black',
        fontWeight: '500',
        fontSize: 20,
    },
    touchableOpacity: {
        borderColor: 'red',
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 50,
        width: '100%',
        marginTop: 10,
    },
    buttonText: {
        marginStart: 10,
    },
});

export default Profile;
