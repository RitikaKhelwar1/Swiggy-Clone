import React, { useState } from 'react'
import {
    Text, View, TextInput, TouchableOpacity, Button, Image, SafeAreaView,
    StyleSheet,
} from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';

function LoginSlider() {
    const RenderItem = ({ item }) => {
        return (
            <View
                style={{
                   flex:0.5,
                    backgroundColor: '#fa7743',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    padding:50
                }}>
                <Text style={styles.introTitleStyle}>
                    {item.title}
                </Text>
                <Image
                    style={styles.introImageStyle}
                    source={item.uri} />
                <Text style={styles.introTextStyle}>
                    {item.text}
                </Text>
            </View>
        );
    };

    return (
        <>
            <AppIntroSlider
                data={slides}
                renderItem={RenderItem}
                showDoneButton={false}
                showNextButton={false}
            />

        </>
    )
}

export default LoginSlider



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
    },
    titleStyle: {
        padding: 10,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    paragraphStyle: {
        padding: 20,
        textAlign: 'center',
        fontSize: 16,
    },
    introImageStyle: {
        width: 200,
        height: 200,
    },
    introTextStyle: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        paddingVertical: 30,
    },
    introTitleStyle: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginBottom: 16,
        fontWeight: 'bold',
    },
});

const slides = [
    {
        key: 's1',
        text: 'Best Burger ',
        title: 'Burger King',
            uri:
            require('../assets/Images/TopPick1.jpeg'),
       
        backgroundColor: '#20d2bb',
    },
    {
        key: 's2',
        title: 'Katani House',
        text: 'Upto 25% off on order above Rs200/-',
        uri: require('../assets/Images/TopPick2.jpeg'),
      
        backgroundColor: '#febe29',
    },
    {
        key: 's3',
        title: 'Saini Sweets',
        text: 'Enjoy Great offers on our all items',
        uri:require('../assets/Images/TopPick8.jpeg'),
        backgroundColor: '#22bcb5',
    },
    {
        key: 's4',
        title: 'South Indian Foods',
        text: ' Best Deals on all our items',
        uri:require('../assets/Images/TopPick3.jpeg'),
        backgroundColor: '#3395ff',
    },
    {
        key: 's5',
        title: "La Pino's Pizza",
        text: 'enjoy 20% Off on first three orders',
        uri:require('../assets/Images/TopPick4.jpeg'),
        backgroundColor: '#f6437b',
    },
    {
        key: 's6',
        title: 'Pizza Lovers',
        text: ' 10% off on first order',
        uri:require('../assets/Images/TopPick7.jpeg'),
        backgroundColor: '#febe29',
    },
];
