import {ScrollView, Text, View} from 'react-native';
import globalStyles from "../styles/styles";
import { SafeAreaView } from 'react-native-safe-area-context';
export default function AirQuality(){
    return (
        <SafeAreaView>
        <ScrollView
            style = {{flex:1}}
            contentContainerStyle={globalStyles.container}
         >
        <View style ={globalStyles.container}>
            <View style = {globalStyles.header}>
                <Text style = {globalStyles.title}>Air Quality</Text>
            </View>
            <View style={globalStyles.row}>
                <View style={globalStyles.data_box}>
                    <Text style = {globalStyles.label}>Temperature</Text>
                    <Text style = {globalStyles.info}>54</Text>
                </View>
                <View style={globalStyles.data_box}>
                    <Text style = {globalStyles.label}>Humidity</Text>
                    <Text style = {globalStyles.info}>54</Text>
                </View>
            </View>
            <View style={globalStyles.fullBox}>
                <Text style = {globalStyles.label}>Air Quality</Text>
                <Text style = {globalStyles.info}>54</Text>
                <Text style = {globalStyles.small}>Moderate</Text>
            </View>
            <View style = {globalStyles.fullBox}>
                <Text style = {globalStyles.label}>VOC Index</Text>
                <Text style = {globalStyles.info}>144</Text>
            </View>
            <View style = {globalStyles.row}>
                <View style = {globalStyles.data_box}>
                    <Text style = {globalStyles.label}>PM2.5 Levels</Text>
                    <Text style = {globalStyles.info}>😀</Text>
                </View>
                <View style = {globalStyles.data_box}>
                    <Text style = {globalStyles.label}>CO Levels</Text>
                    <Text style = {globalStyles.info}>😥</Text>
                </View>
            </View>
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}