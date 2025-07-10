// filepath: c:\Users\tanya\Downloads\GSET-Smart-Masks\Smart-mask-tracker\styles\globalStyles.ts
import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    container: {
        backgroundColor:'#25292e',
        justifyContent:'center',
    },
    header: {
        backgroundColor: 'white',
        padding:16,
        alignItems:'center',
        justifyContent:'center'
    },
    title: {
        color:'black',
        fontSize: 26,
        fontFamily: "Manrope_700Bold",
    },
    info: {
        color:'black',
        fontSize: 40,
        fontFamily:"Manrope_400Regular"
    },
    data_box:{
        backgroundColor:'white',
        borderRadius:10,
        borderWidth:2,
        borderColor:'#0377fc',
        padding:16,
        elevation:3,
        flex: 0.48,
        shadowColor:'#000',
        shadowOpacity:0.1,
        shadowOffset: { width:0, height:2 },
        shadowRadius:4,
        margin:16, 
    },
    fullBox: {
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        borderWidth:2,
        borderColor:'#0377fc',
        padding: 16,
        marginTop: 16,
        width: '100%', // Make it span full width
        shadowColor:'#000',
        shadowOpacity:0.1,
        shadowOffset: { width:0, height:2 },
        shadowRadius:4,
    },
    label:{
        alignSelf:'center',
        fontSize: 20,
        fontFamily: "Manrope_400Regular",
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    small: {
        fontSize:12,
        fontFamily: "Manrope_300Light",
    }
}); 

export default globalStyles;