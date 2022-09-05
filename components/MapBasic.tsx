import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { Button, Code, Container } from '@mantine/core';
import { mapboxClient } from '../services/mapbox';
import useStyles from './MapContainer.styles';

mapboxgl.accessToken = mapboxClient;

export interface Marker {
  city: string;
  country: string;
  latCoord: number;
  longCoord: number;
}

export default function MapBasic() {
  const mapContainer = useRef<any>(null);
  const map = useRef<mapboxgl.Map | any>(null);
  const [lng, setLng] = useState(-75.448446);
  const [lat, setLat] = useState(6.108381);
  const [zoom, setZoom] = useState(13);
  const { classes } = useStyles();

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/4pl3/cl5u8iejc003014o6ze8txwgf',
      center: [lng, lat],
      zoom,
    });
  });

  useEffect(() => {
    if (map.current) return; // rezises
  map.current.on('load', () => {
    map.current.resize();
  });
});

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
      
      <Container fluid ref={mapContainer} className={classes.wrapper} px={0}>
    <div>

        <Button compact size="xs" color="teal">
Copiar coordenadas
        </Button>

      <Code>
      Latitude: {lat} | Longitude: {lng} | Zoom: {zoom}
      </Code></div>
    </Container>
  );
}
