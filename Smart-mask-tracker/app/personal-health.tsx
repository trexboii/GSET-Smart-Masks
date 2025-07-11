import {Text,View, ScrollView, Image} from 'react-native';
import globalStyles from "../styles/styles";
import { SafeAreaView } from 'react-native-safe-area-context';
export default function PersonalHealth(){
    return (
        <ScrollView
            style = {{flex:1}}
            contentContainerStyle={globalStyles.container}
         >
        <SafeAreaView>
            <View style ={globalStyles.container}>
                <View style = {globalStyles.header}>
                    <Text style = {globalStyles.title}>Personal Health</Text>
                </View>
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
                            style = {{width:'80%',alignSelf:"center",margin:10}}
                        />
                </View>
                <View style={globalStyles.fullBox}>
                    <Text style = {globalStyles.label}>All Time</Text>
                    <Text style = {globalStyles.info}>54</Text>
                    <Text style = {globalStyles.small}>Moderate</Text>
                </View>
                <View style = {globalStyles.fullBox}>
                    <View style = {globalStyles.row}>
                        <Text style = {globalStyles.label}>CO2 Level</Text>
                        <Text style = {globalStyles.info}>144</Text>
                    </View>
                </View>
            </View>

        </SafeAreaView>
        </ScrollView>
    )
}