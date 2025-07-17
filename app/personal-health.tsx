import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from 'react-native';
import globalStyles from "../styles/styles";
import { getLatestCo2 } from './api/sendToServer';
export default function PersonalHealth(){
    const [latestCo2, setLatestCo2] = useState<number | null>(null);
    useEffect (() => {
        const fetchLatest = async() => {
            const latest = await getLatestCo2()
            setLatestCo2(latest)
        }
        const interval = setInterval(() => {
            fetchLatest()
        },5000)
        return () => clearInterval(interval)
    }
    ,[])
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
                        <Text style = {globalStyles.info}>{latestCo2 !== null ? `${latestCo2} ppm` : "Loading..."}</Text>
                    </View>
                </View>
                </View>

        </ScrollView>
    )
}
