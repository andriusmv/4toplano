import * as React from 'react';
import Map, { Marker, NavigationControl, FullscreenControl, GeolocateControl, ScaleControl, Layer } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { mapboxClient } from '../services/mapbox';

const MAPBOX_TOKEN = ''; // Set your mapbox token here
mapboxgl.accessToken = mapboxClient;

const initialViewState = {
  latitude: 6.108381,
  longitude: -75.448446,
  zoom: 13,
  bearing: 0,
  pitch: 0,
};

const prediosUrbanos = {
  id: '4pl3.a4i7kz6r', // prediosurbanos-bek4wv
  type: 'fill' as 'fill',
  source: 'mapbox://styles/4pl3/cl5u8iejc003014o6ze8txwgf',
  'source-layer': 'PrediosUrbanos-bek4wv',
  // filter: ['==', 'class', 'park'],
  paint: {
    'fill-color': '#000000',
  visibility: 'visible',
  },
};

export default function MapCanvas() {
  return (
    <div>
      <Map
        initialViewState={initialViewState}
        style={{ position: 'relative', width: 2000, height: 1000 }}
        mapStyle="mapbox://styles/4pl3/cl5u8iejc003014o6ze8txwgf"
        mapboxAccessToken={MAPBOX_TOKEN}
        interactiveLayerIds={['features-id']}
      >
        <Layer {...prediosUrbanos} />
        <NavigationControl position="top-left" />
        <Marker longitude={-75.448446} latitude={6.108381} />
        <FullscreenControl position="top-left" />
        <GeolocateControl position="top-left" />
        <ScaleControl position="top-left" />
      </Map>
    </div>
  );
}
