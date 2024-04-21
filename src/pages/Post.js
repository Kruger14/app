import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import ArrowBack from '../assets/svg/ArroBack';
import * as ImagePicker from 'react-native-image-picker';



const Post = () => {
    const Navigation = useNavigation();


    const [image, setImage] = useState(null);

    const handleChoosePhoto = async () => {
        const options = {
            mediaType: 'photo',
        };

        try {
            const response = await ImagePicker.launchImageLibrary(options);
            console.log(response);

            if (!response.didCancel) {
                setImage(response.uri);
            }
        } catch (error) {
            console.error('Error picking image:', error);
        }
    };


    return (
        <SafeAreaProvider>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => Navigation.navigate('home')}>
                        <View style={styles.backButton}>
                            <ArrowBack height={25} width={25} />
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text style={{ marginStart: 10, paddingBottom: 10 }}>Fill up the form to post property</Text>

                    <View>
                        <Text style={styles.txt}>Title</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Type your Header-title'
                        />
                    </View>

                    <View>
                        <Text style={styles.txt}>Type your name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Type your name'
                        />
                    </View>

                    <View>
                        <Text style={styles.txt}>Location</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Location'
                        />
                    </View>

                    <View>
                        <Text style={styles.txt}>Description</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Description'
                            multiline={true}
                            numberOfLines={4}
                        />
                    </View>

                    <View>
                        <Text style={styles.txt}>No of bhk</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='No of Bhk'
                        />
                    </View>


                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        {image && <Image source={image} style={{ width: 200, height: 200 }} />}
                        <Button title="Choose Photo" onPress={handleChoosePhoto} />
                    </View>


                </View>
            </View>
        </SafeAreaProvider >
    )
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    backButton: {
        marginStart: 12,
    },
    input: {
        backgroundColor: 'lightgrey',
        marginHorizontal: 12,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },

    txt: {
        marginStart: 14,
        marginBottom: 5,
    },
});

export default Post;


const Screentwo = () => {
    return (
        <View>
            <Text style={styles.txt}>Title</Text>
            <TextInput
                style={styles.input}
                placeholder='Type your Header-title'
            />
        </View>
    );
}