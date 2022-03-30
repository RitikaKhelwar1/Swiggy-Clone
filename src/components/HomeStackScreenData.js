import React from 'react'
import { Text, View, TextInput, TouchableOpacity, Button } from 'react-native'
import ActionSheet, { SheetManager } from "react-native-actions-sheet";



export function Offers() {
    return(
        <Text>I am offer Screen</Text>
    )
}
    

export function HomeLocation() {
    return (
        <View style={{ marginLeft: 60, justifyContent: "center", }}>
            <Text style={{ color: "orange", fontSize: 10, marginTop: 10 }}>SET DELIVERY LOCATION</Text>
            <TextInput placeholder='Search for area, street name...' style={{ marginVertical: 5, paddingTop: 0, paddingHorizontal: 0, paddingBottom: 10, fontSize: 15, fontWeight: "bold", }}></TextInput>
        </View>
    )
}

