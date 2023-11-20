"use client";

import { useEffect } from 'react';
import AerisWeather from '@aerisweather/javascript-sdk'; // Import the AerisWeather SDK

const XWeatherMap = () => {
  useEffect(() => {
    const aeris = new AerisWeather('8gQu4N2OUfLt2ScA1PFpF', 'AWTWxvpsReFHobyz21GGKy5ewSIchRnKipBAinEX');

    aeris.views().then((views) => {
      const map = new views.InteractiveMap(document.getElementById('map'), {
        center: {
          lat: 35.0254981588326,
          lon: 72.04833984375,
        },
        zoom: 8,
        layers: 'satellite-water-vapor,fsatellite,fradar,roads',
      });
    });
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div className='fixed z-0' id="map" style={{ height: '100vh', width: '100%' }}></div>
  );
};

export default XWeatherMap;
