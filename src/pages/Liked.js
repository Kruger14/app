import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CardComponent from './CardComponent';
import ArrowBack from '../assets/svg/ArroBack';
import { useNavigation } from '@react-navigation/native';

const Liked = () => {
    const Navigation = useNavigation();
    return (
        <SafeAreaProvider>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{
                    height: 50, justifyContent: 'center', alignItems: 'flex-start'
                }}>
                    <TouchableOpacity onPress={() => Navigation.navigate('home')}>
                        <View style={{ marginStart: 12, }}>
                            <ArrowBack height={25} width={25} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ elevation: 0, backgroundColor: 'white', height: 40, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Text style={{ marginEnd: 15 }}>Total count:1</Text>
                </View>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 12, }}>
                    <CardComponent />
                </View>
            </View>
        </SafeAreaProvider>
    )
}

export default Liked;