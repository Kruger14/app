import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ArrowForward from '../assets/svg/ArrowForward';

const Profile = () => {
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <Image style={styles.profileImage} source={require('../assets/dharshini.jpg')} />
                    <Text style={styles.profileName}>Dharshini</Text>
                </View>
            </View>

            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuItem}>
                    <Text>Create a post</Text>
                    <ArrowForward height={25} width={25} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Text>Favorites</Text>
                    <ArrowForward height={25} width={25} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Text>Help & Feedback</Text>
                    <ArrowForward height={25} width={25} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Text>Help & Feedback</Text>
                    <ArrowForward height={25} width={25} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Text>Logout</Text>
                    <ArrowForward height={25} width={25} />
                </TouchableOpacity>
            </View>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 180,
        backgroundColor: 'blue',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    profileContainer: {
        marginBottom: -50,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 120,
        width: 120,
        borderRadius: 100,
    },
    profileImage: {
        borderWidth: 5,
        borderColor: 'white',
        height: 120,
        width: 120,
        borderRadius: 100,
    },
    profileName: {
        fontSize: 18,
        color: 'black',
    },
    menuContainer: {
        marginTop: 100,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
        backgroundColor: 'white',
        paddingStart: 12,
        paddingEnd: 12,
    },
});

export default Profile;