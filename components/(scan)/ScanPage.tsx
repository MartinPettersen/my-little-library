import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CameraView, Camera } from "expo-camera";
import ScanButton from "./ScanButton";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../utils/types";

type ScanProps = {
  type: string;
  data: string;
};

const ScanPage = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();


  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const resetScanner = () => {
    setScanned(false);
  };

  const handleBarCodeScanned = ({ type, data }: ScanProps) => {
    setScanned(true);
    navigation.navigate("Book", {type, data});

  };

  if (hasPermission === null) {
    return <Text>Need Camera Access</Text>;
  }
  if (hasPermission === false) {
    return <Text>Missing Camera Access</Text>;
  }

  return (
    <View style={styles.container}>
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["ean13", "ean8"],
        }}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.buttonContainer}>
        {scanned ? (
          <ScanButton buttonText="Scan" action={() => resetScanner()} />
        ) : (
          <ScanButton buttonText="Scanning..." action={() => setScanned(true)} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",

  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 20,
    marginBottom: 30,
  },
});

export default ScanPage;
