import { View, Button, Text } from 'react-native';
import { sendCO2, sendVOCData } from './api/sendToServer';

export default function Simulate() {
  const simulateCO2 = () => {
    const co2 = Math.floor(400 + Math.random() * 100);
    sendCO2(co2);
  };

  const simulateVOC = () => {
    const lat = 37.7749 + (Math.random() - 0.5) * 0.01;
    const lng = -122.4194 + (Math.random() - 0.5) * 0.01;
    const voc = Math.floor(Math.random() * 500);
    const pm25 = parseFloat((Math.random() * 50).toFixed(2));
    const temperature = 80 - (Math.random() * 10);
    const humidity = 50 + (Math.random() * 5);
    sendVOCData(lat, lng, voc, pm25,temperature, humidity);
  };

  return (
    <View style={{ padding: 40 }}>
      <Text style={{ marginBottom: 10 }}>Simulate Smart Mask Data</Text>
      <Button title="Send Fake CO2" onPress={simulateCO2} />
      <View style={{ height: 10 }} />
      <Button title="Send Fake VOC + PM2.5 + GPS" onPress={simulateVOC} />
    </View>
  );
}
