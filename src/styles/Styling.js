import { StyleSheet } from "react-native"

export default StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: "white",

    },
    GeneralComponent: {
        borderRadius: 5,
        justifyContent: "space-around",
        margin: 10,
        marginTop: 5,
    },

    // --------component1------------------------
    Component1: {
        backgroundColor: 'mistyrose',
        borderRadius: 20,
        marginLeft: 10,
        marginEnd: 10,
        marginTop: 5,
        flexDirection: "row"

    },
    Component1View: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
    },
    compo1: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10,
        alignItems: "center"
    },
    Component1Image: {
        borderRadius: 5,
        height: 50,
        width: 50
    },
    Component1View2: {
        flex: 0.8,
        justifyContent: "center",
        alignItems: "flex-start",
    },

    Component1Text: {
        fontSize: 16
    },
    SubComponent1Img: {
        height: 70,
        width: 100,
        borderColor: "grey",
        borderRadius: 20,
        borderWidth: 1

    },
    // -------------------------------------------------

    // ----------------Component2---------------------->
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
    // -------------------------------------

    // --------------comppnent 4--------------------
    Component3: {
        margin: 10,
        marginTop: 5,
        padding: 10,
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: "flex-start",
    },
    SubComponent3Img: {
        height: 90,
        width: 80,
        marginLeft: 15,
        borderRadius: 15,

    },
    // -------------------------------------------------
    // ------------------header------------------------>
    header: {
        flexDirection: "row",
        borderBottomWidth: 0.2,
        borderBottomColor: "grey"
    },

    headerLogo: {
        height: 21,
        width: 20,
        marginRight: 5

    },
    HomeLocation: {
        flexDirection: 'column',
        paddingHorizontal: 10,
        paddingBottom: 15,
        flex: 0.75
    },
    Offers: {
        flex: 0.25,
        paddingHorizontal: 5,
        justifyContent: 'center'
    },
    OffersView: {
        flexDirection: "row",
        alignItems: 'center',
        alignContent: "center",
        justifyContent: "flex-end"
    },
    OffersText: {
        fontWeight: "bold",
        color: "grey",
        fontSize: 17,
        marginRight: 5
    },

    //-----------------------------------component 4------------>
    Component4: {

        marginTop: 5,

    },
    SubComponent4Img: {
        height: 100,
        width: 100,
        marginLeft: 15,
        borderRadius: 70,

    },

    // -------------------------Instamart------------------------->
    InstaView1: {
        flexDirection: "row",
        borderBottomColor: "purple",
        borderBottomWidth: 2
    },
    InstaView2: {
        flex: 0.5,
        alignItems: "flex-start",
        justifyContent: "flex-end"
    },
    IText1: {
        fontWeight: "bold",
        fontSize: 30,
        color: "purple"
    },
    IText2: {
        color: "purple",
        fontSize: 10
    },
    IText3: {
        color: "purple",
        fontWeight: "bold"
    },
    InstaImg: {
        width: 400,
        borderRadius: 15,
        height: 180
    },

    Instamart: {
        margin: 10,
        marginTop: 5,
        padding: 10
    },

    InstamartOff: {

        marginTop: 10,
        width: 400, flex: 1,
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "stretch"
    },
    InstaBtn: {
        marginTop: 10,
        borderRadius: 50,
        marginHorizontal: 20,
    },
    // ----------------------------------------------
    // ------------Brands---------------------------
    BrandContainer: {
        flex: 0.7,
        flexDirection: "row",
        justifyContent: "flex-end",
        borderBottomWidth: 1,
        borderBottomColor: "grey"
    },
    CardContainer: {
        flex: 0.5,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    CardText: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 12
    },
    CardText2: {
        textAlign: "center",
        fontSize: 8
    },
    CardImgContainer: {
        flex: 0.7,
        flexDirection: "row",
        justifyContent: "flex-end",
        borderBottomWidth: 1,
        borderBottomColor: "grey"
    },

    BrandCardImg: {
        height: 35,
        width: 35,
        margin: 5
    },
    BrandCard2: {
        borderColor: "grey",
        borderRadius: 20,
        borderWidth: 1,
        // backgroundColor:"blue",
        width: 80,
        height: 90,
        marginLeft: 15,
        // alignContent:"center",
        alignItems: "center",
        marginTop: 10

    },
    // ------------------------------------------
    // -------------Footer-------------------->
    Footer: {
        justifyContent: "space-around",
        alignItems: "center",
        // marginVertical:20,
        flexDirection: 'row',
        borderTopWidth: 0.2,
        borderTopColor: "grey",
        padding: 15
    },
    FooterImg: {
        width: 25,
        height: 25
    },
    // ------------------------------------------



    // -----------------Login Slider-------------------
    LoginSlider: {
        flex: 0.5,
        backgroundColor: '#fa7743',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 50
    },

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

    // --------------My account------------

    MyAccountContainer: {
        padding: 20,
        justifyContent: "center",
        borderBottomColor: "grey",
        borderBottomWidth: 0.5
    },
    AccountFont: {

        fontWeight: "bold",
        color: "black",
        fontSize: 17,

    },



})


