// weatherMap.client.jsx
"use client";

import AerisWeather from '@aerisweather/javascript-sdk';
import '@aerisweather/javascript-sdk/dist/styles/styles.css';
import { useEffect } from 'react';

export default function WeatherMap() {
  useEffect(() => {
    // Initialize AerisWeather with environment variables
    const aeris = new AerisWeather('8gQu4N2OUfLt2ScA1PFpF', 'AWTWxvpsReFHobyz21GGKy5ewSIchRnKipBAinEX');

    aeris.apps().then((apps) => {
      const map = new apps.InteractiveMapApp('#ia-map', {
        map: {
          strategy: 'leaflet',
          zoom: 8,
          layers: 'satellite,radar,alerts,maxTempC'
        },
        panels: {
          layers: {
            buttons: [
              { id: 'radar', value: 'radar:80', title: 'Radar' },
              { id: 'satellite', value: 'satellite:75', title: 'Satellite' },
              { id: 'alerts', value: 'alerts', title: 'Alerts' },
              { id: 'maxTempC', value: 'maxTempC', title: 'temp' }
            ]       
          }
        }
      });
    }).catch(error => {
      console.error('Error setting up the weather map:', error);
    });
  }, []);

  return <div className='fixed' id="ia-map" style={{ height: '100vh', width: '100%' }} />;
}
