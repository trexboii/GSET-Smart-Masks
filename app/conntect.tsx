import { 
    PermissionsAndroid, 
    Platform, 
    Text, 
    View, 
    ScrollView, 
    Image 
} from 'react-native';
import { useEffect, useState } from 'react';
import globalStyles from "../styles/styles";

async function requestPermissions() {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    ]);

    console.log('Permissions result:', granted);
  }
}
