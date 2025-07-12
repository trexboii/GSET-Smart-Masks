import {Text,View, ScrollView, Image} from 'react-native';
import globalStyles from "../styles/styles";
export default function PersonalHealth(){
    return (
        <ScrollView
            style = {{flex:1}}
            contentContainerStyle={globalStyles.container}
         >
            <View style ={globalStyles.container}>
                <View style={globalStyles.data_box}>
                    <Text style = {globalStyles.label}>Breathing Rate (Current)</Text>
                    <View style = {globalStyles.row}>
                        <Text style = {globalStyles.info}>54</Text>
                        <Text style = {globalStyles.unit}>Breaths/Minute</Text>
                    </View>
                </View>
                <View style={globalStyles.fullBox}>
                        <Text style = {globalStyles.label}>This Session</Text>
                        <Image 
                            source={require("../assets/images/breathing-rate-filler.png")}
                            style = {{width:'80%',alignSelf:"center",margin:5}}
                            resizeMode="contain"
                        />
                </View>
                <View style={globalStyles.fullBox}>
                    <Text style = {globalStyles.label}>All Time</Text>
                    <Image 
                            source={require("../assets/images/breathing-rate-filler.png")}
                            style = {{width:'80%',alignSelf:"center",margin:5}}
                            resizeMode="contain"
                        />
                </View>
                <View style = {globalStyles.fullBox}>
                    <View style = {globalStyles.row}>
                        <Text style = {globalStyles.label}>CO2 Level</Text>
                        <Text style = {globalStyles.info}>144</Text>
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}