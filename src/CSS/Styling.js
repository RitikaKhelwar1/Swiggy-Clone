

import React from 'react'

import { StyleSheet } from "react-native"

export default StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor:"white",
        // padding:20
        // flexWrap:"wrap"

    },
    Component1: {
        backgroundColor: 'mistyrose',
        borderRadius: 20,
        marginLeft: 10,
        marginEnd: 10,
        marginTop: 5

    },
    compo1: {
        flex: 1, 
        justifyContent: 'space-around', 
        flexDirection: "row", 
        marginTop: 10, 
        marginBottom: 10
    },
    Component1Image: {
        borderRadius: 5,
        height: 50,
        width: 50
    },
    GeneralComponent: {
        borderRadius: 5,
        justifyContent: "space-around",
        margin: 10,
        marginTop: 5,
        


    },
    SubComponent1Img: {
        height: 70,
        width: 100,
        borderColor: "grey",
        borderRadius: 20,
        borderWidth: 1

    },
    Component2: {
        borderRadius: 5,
        justifyContent: "space-around",
        // marginTop:5,
        // padding:10
    },

    Component2Img: {
        height: 200,
        width: 350,
        marginLeft: 15,
        borderRadius: 10

    },
    font: {
        fontWeight: "bold",
        color: "midnightblue",
        fontSize: 17,
        marginLeft: 10,
        
    },
    headerLogo: {
        height: 21,
        width: 20,

    },
    Component3: {
        // borderRadius:5,
        // justifyContent:"space-around",
        margin: 10,
        marginTop: 5,
        padding: 10
    },
    SubComponent3Img: {
        height: 90,
        width: 80,
        marginLeft: 15,
        borderRadius: 15,
        
    },
    Component4: {
        // margin: 5,
        marginTop: 5,
        // marginBottom:10
    
    },
    SubComponent4Img:{
        height: 100,
        width: 100,
        marginLeft: 15,
        borderRadius: 70,
        
    },
    Instamart:{
        margin: 10,
        marginTop: 5,
        padding: 10
    },
    InstamartOff:{
        
        marginTop:10,
        width:400,flex:1,
        justifyContent:"center",
        alignSelf:"center",
        alignItems:"stretch"
    },
    BrandCardImg:{
        height:35,
        width:35,
        margin:5
    },
    BrandCard2:{
        borderColor:"grey",
        borderRadius:20,
        borderWidth:1,
        // backgroundColor:"blue",
        width:80,
        height:90,
        marginLeft:15,
        // alignContent:"center",
        alignItems:"center",
        marginTop:10

    },
    Footer:{
        justifyContent:"space-around",
        alignItems:"center",
        // marginVertical:20,
        flexDirection:'row',
        borderTopWidth:0.2,
        borderTopColor:"grey",
        padding:15
    },
    FooterImg:{
        width:25,
        height:25
    },
    AccountFont:{
        
        fontWeight: "bold",
        color: "black",
        fontSize: 17,
        
    },
   
    

})


