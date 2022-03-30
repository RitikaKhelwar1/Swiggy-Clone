import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, Button ,Image,SafeAreaView,
    StyleSheet,} from 'react-native'
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import data from './data';
import AppIntroSlider from 'react-native-app-intro-slider';
import BrandData from './BrandData';




export function Offers() {
    return(
        <Text>I am Offer Screen</Text>
    )}
    
  
    
    

export function HomeLocation() {
    return (
        <View style={{ marginLeft: 60, justifyContent: "center", }}>
            <Text style={{ color: "orange", fontSize: 10, marginTop: 10 }}>SET DELIVERY LOCATION</Text>
            <TextInput placeholder='Search for area, street name...' style={{ marginVertical: 5, paddingTop: 0, paddingHorizontal: 0, paddingBottom: 10, fontSize: 15, fontWeight: "bold", }}></TextInput>
        </View>
    )
}


