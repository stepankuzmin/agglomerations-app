/**
 * @flow
 */

import React from "react";
import Config from "react-native-config";
import MapboxGL from "@mapbox/react-native-mapbox-gl";
import { StyleSheet } from "react-native";

MapboxGL.setAccessToken(Config.MAPBOX_ACCESS_TOKEN);

const App = () => {
  return (
    <MapboxGL.MapView
      zoomLevel={1}
      style={styles.map}
      styleURL="mapbox://styles/mapbox/streets-v9"
    />
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export default App;
