import Config from 'react-native-config';

export const MAPBOX_ACCESS_TOKEN = Config.MAPBOX_ACCESS_TOKEN;

export const viewport = {
  centerCoordinate: [37.617635, 55.755814],
  zoomLevel: 7,
  pitch: 40
};

export const sources = {
  'gamma.urban_expansion': {
    url: 'https://agglomerations.org/tiles/gamma.urban_expansion.json'
  }
};
