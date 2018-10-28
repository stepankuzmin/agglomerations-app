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
      <MapboxGL.VectorSource
        id='gamma.density_seasons'
        url='https://agglomerations.org/tiles/gamma.density_seasons.json'
      >
        <MapboxGL.FillExtrusionLayer
          id='gamma.density_seasons'
          sourceID='gamma.density_seasons'
          sourceLayerID='gamma.density_seasons'
          belowLayerID='road_major_base'
          style={mapStyles.fillExtrusion}
          filter={['all', ['>', 'density', 0], ['in', 'season', 0, 1]]}
        />
      </MapboxGL.VectorSource>
    </MapboxGL.MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

const mapStyles = MapboxGL.StyleSheet.create({
  fillExtrusion: {
    visibility: 'visible',
    fillExtrusionOpacity: 0.55,
    fillExtrusionColor: MapboxGL.StyleSheet.source(
      [
        [0, '#CCF7FF'],
        [10, '#7FFF9E'],
        [500, '#00F0FF'],
        [1500, '#00B2FF'],
        [3000, '#0D8CFF'],
        [5000, '#194CFF'],
        [10000, '#5525F2'],
        [20000, '#8500CC'],
        [35000, '#B800D9']
      ],
      'density',
      MapboxGL.InterpolationMode.Interval
    ),
    fillExtrusionHeight: MapboxGL.StyleSheet.source(
      [[0, 0], [10000, 10000], [40000, 40000], [100000, 60000]],
      'density',
      MapboxGL.InterpolationMode.Exponential
    )
  }
});

export default App;
