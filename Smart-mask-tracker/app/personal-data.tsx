import {Text,View} from 'react-native';
import globalStyles from "../styles/styles";
export default function AboutScreen(){
    return (
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
        </View>

    )
}