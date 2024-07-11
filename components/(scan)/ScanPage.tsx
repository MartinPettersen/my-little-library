import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CameraView, Camera } from 'expo-camera';

type ScanProps = {
    type: string;
    data: string;
  };
  

const ScanPage = () => {

    const [hasPermission, setHasPermission] = useState<boolean | null>(null)
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        const getCameraPermissions = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted")
        };

        getCameraPermissions();
    }, []);

    const resetScanner = () => {
        setScanned(false)
    }

    const handleBarCodeScanned = ({ type, data}: ScanProps) => {
        console.log(type)
        console.log(data)
        
    }

    if (hasPermission === null) {
        return <Text>Need Camera Access</Text>
    }
    if (hasPermission === false) {
        return <Text>Missing Camera Access</Text>
    }

  return (
    <View style={styles.container}>
        <CameraView 
        onBarcodeScanned={scanned ? undefined: handleBarCodeScanned}
        barcodeScannerSettings={{
            barcodeTypes: ["ean13", "ean8"],
        }}
        style={StyleSheet.absoluteFillObject}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default ScanPage