/**
 * @flow
 */

import React from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { StyleSheet } from 'react-native';

import { viewport, MAPBOX_ACCESS_TOKEN } from './config';

MapboxGL.setAccessToken(MAPBOX_ACCESS_TOKEN);

const App = () => {
  return (
    <MapboxGL.MapView
      style={styles.map}
      styleURL='mapbox://styles/mufmap/cj3mqedw800032sonq89ukwh7'
      {...viewport}
    >
      {/* <MapboxGL.VectorSource
        id='gamma.urban_expansion'
        url={sources.urban_expansion}
      >
        <MapboxGL.FillLayer
          id='gamma.urban_expansion'
          sourceLayerID='gamma.urban_expansion'
          style={layerStyles.boxFill}
        />
      </MapboxGL.VectorSource> */}
    </MapboxGL.MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

// const layerStyles = MapboxGL.StyleSheet.create({
//   boxFill: {
//     fillColor: 'green',
//     fillAntialias: true
//   }
// });

export default App;
