import * as React from 'react';
import Map, { Marker, NavigationControl, FullscreenControl, GeolocateControl, ScaleControl } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import { mapboxClient } from '../services/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = ''; // Set your mapbox token here
mapboxgl.accessToken = mapboxClient;

export default function MapCanvas() {
  return (
    <div>
      <Map
        initialViewState={{
            latitude: 6.108381,
            longitude: -75.448446,
            zoom: 13,
        }}
        style={{ position: 'relative', width: 2000, height: 1000 }}
        mapStyle="mapbox://styles/4pl3/cl5u8iejc003014o6ze8txwgf"
        mapboxAccessToken={MAPBOX_TOKEN}
        interactiveLayerIds={['places']}
      >
        <NavigationControl position="top-left" />
        <Marker longitude={-75.448446} latitude={6.108381} />
        <FullscreenControl position="top-left" />
        <GeolocateControl position="top-left" />
        <ScaleControl position="top-left" />
      </Map>
    </div>
  );
}
