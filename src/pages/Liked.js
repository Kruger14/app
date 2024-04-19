import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CardComponent from './CardComponent';
import ArrowBack from '../assets/svg/ArroBack';
import { useNavigation } from '@react-navigation/native';

const Liked = () => {
    const Navigation = useNavigation();
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => Navigation.navigate('home')}>
                        <View style={styles.backButton}>
                            <ArrowBack height={25} width={25} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.totalCountContainer}>
                    <Text style={styles.totalCountText}>Total count: 1</Text>
                </View>

                <View style={styles.cardContainer}>
                    <CardComponent />
                </View>
            </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    backButton: {
        marginStart: 12,
    },
    totalCountContainer: {
        elevation: 0,
        backgroundColor: 'white',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    totalCountText: {
        marginEnd: 15,
    },
    cardContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 12,
    },
});

export default Liked;
