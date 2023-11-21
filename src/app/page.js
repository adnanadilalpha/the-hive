import AerisWeather from '@aerisweather/javascript-sdk';
import '@aerisweather/javascript-sdk/dist/styles/styles.css';
import WeatherComponent from './component/app';
import SideBar from './component/sidebar';
import NavBar from './component/navbar';
import XWeatherMap from './component/map';

export default function Home() {
  const aeris = new AerisWeather('8gQu4N2OUfLt2ScA1PFpF', 'AWTWxvpsReFHobyz21GGKy5ewSIchRnKipBAinEX');
  return (
  <div>
    <NavBar></NavBar>
   <SideBar></SideBar>
  
   
   {/* <WeatherComponent></WeatherComponent> */}
  <XWeatherMap></XWeatherMap>
  
 
  </div>
  )
}
