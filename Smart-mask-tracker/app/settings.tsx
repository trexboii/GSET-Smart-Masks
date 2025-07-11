import {ScrollView, Text, View} from 'react-native';
import globalStyles from "../styles/styles";
import {Link} from "expo-router"
import { SafeAreaView } from 'react-native-safe-area-context';
export default function AirQuality(){
    return (
        <SafeAreaView>
        <ScrollView>
        <View style={globalStyles.container}>
            <View style={globalStyles.data_box}>
                <View style={globalStyles.row}>
                    <Text style = {globalStyles.label}>Notifications</Text>
                    <Text style = {globalStyles.infoAlignedRight}>On/Off</Text>
                </View>
            </View>
            <View style={globalStyles.data_box}>
                <View style={globalStyles.row}>
                    <Text style = {globalStyles.label}>Preferred Units</Text>
                    <Text style = {globalStyles.infoAlignedRight}>On/Off</Text>
                </View>
            </View>
            <View style={globalStyles.data_box}>
                <View style={globalStyles.row}>
                    <Text style = {globalStyles.label}>Data Sharing</Text>
                    <Text style = {globalStyles.infoAlignedRight}>On/Off</Text>
                </View>
            </View>
            <View style={globalStyles.data_box}>
                <View style={globalStyles.row}>
                    <Text style = {globalStyles.label}>Location Services</Text>
                    <Text style = {globalStyles.infoAlignedRight}>On/Off</Text>
                </View>
            </View>
            <View style={globalStyles.data_box}>
                <View style={globalStyles.row}>
                    <Link href = "/about" style = {globalStyles.label}>About This App</Link>
                </View>
            </View>
        </View>
        </ScrollView>
        </SafeAreaView>
    )

}