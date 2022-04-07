import React, { useState } from 'react'
import {
    Text, View, TextInput, TouchableOpacity, Button, Image, SafeAreaView,
    StyleSheet,
} from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import Styling from '../styles/Styling';
import slides from '../constants/LoginSliderData'

function LoginSlider() {
    const RenderItem = ({ item }) => {
        return (
            <View
                style={Styling.LoginSlider}>
                <Text style={Styling.introTitleStyle}>
                    {item.title}
                </Text>
                <Image
                    style={Styling.introImageStyle}
                    source={item.uri} />
                <Text style={Styling.introTextStyle}>
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





