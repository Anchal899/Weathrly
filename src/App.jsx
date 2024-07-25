import React, { useEffect,useState } from 'react'
import TopButtons from './components/TopButtons'
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndlocation'
import TempAndDetails from './components/TempAndDetails'
import Forecast from './components/Forecast'
import getFormattedWeatherData from './services/weatherService'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const[query,setQuery]=useState({q:'ahmedabad'})
  const[units,setUnits]=useState('metric')
  const[weather,setWeather]=useState(null)
 
  const getWeather=async ()=>{
    const message=query.q?query.q :"current location"
    toast.info(`Fetching weather data for ${message}`)
    
    
    // else if(units==='imperial'&&weather.temp.toFixed()>95){
    //   toast.warn('It is too hot outside')
    // }
    await getFormattedWeatherData({...query,units}).then((data)=>{
      setWeather(data);
      console.log(data);

      if(units==='metric'&&data.temp.toFixed()>32||units==='imperial'&&data.temp.toFixed()>89){
      
        toast.warn('It is too hot outside')
      }
    })
    
    
  };

  useEffect(()=>{
    getWeather();

    // Set up the interval to fetch data every 5 minutes
    const interval = setInterval(() => {
      getWeather();
    }, 300000); // 5 minutes in milliseconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  },[query,units])



 const formatBackground=()=>{
  if(!weather) return 'from-cyan-500 to-blue-700'
  
  const threshold=units==='metric' ? 25:77   //20 degree C or 77farenheit
   if(weather.temp.toFixed()<=threshold) {
    return 'from-cyan-500 to-blue-700';
   }
  return 'from-yellow-600 to-orange-700'
 }
  return (
    <div className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()}`}>
     <TopButtons setQuery={setQuery}/>
     <Inputs setQuery={setQuery} setUnits={setUnits}/>
     {weather &&(
      <>
      <TimeAndLocation weather={weather} units={units}/>
     <TempAndDetails weather={weather} units={units}/>
     <Forecast title='3 hour step forecast' data={weather.hourly}/>
     <Forecast title='Daily forecast' data={weather.daily}/>
      </>
     )}
     <ToastContainer autoClose={2500} theme="colored"/>
    </div>
  )
}

export default App
