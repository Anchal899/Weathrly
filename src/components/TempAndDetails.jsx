import React from 'react'
import {FaThermometerEmpty} from 'react-icons/fa'
import { BiSolidDropletHalf } from 'react-icons/bi'
import {FiWind} from 'react-icons/fi'
import {GiSunrise, GiSunset} from 'react-icons/gi'
import {MdKeyboardArrowUp, MdKeyboardArrowDown,MdEqualizer } from 'react-icons/md'
const TempAndDetails = ({
  weather:{
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
  },
  units,
  
}) => {
  // Calculate Average Temperature in Kelvin

  const averageTempK = (temp + temp_min + temp_max) / 3;

  // Convert Average Temperature to Celsius
  const averageTempCelsius = averageTempK ;

  // Format the average temperature to display
  const averageTempDisplay = averageTempCelsius.toFixed(); // Keep one decimal place
  const getWeatherReason = (details) => {
    switch (details.toLowerCase()) {
      case 'sunny':
        return 'Clear skies with high pressure in the area.';
      case 'clouds':
        return 'Overcast skies due to a weather front moving through.';
      case 'rain':
        return 'Rain showers caused by a low-pressure system.';
      case 'snow':
        return 'Snowfall due to cold temperatures and moisture in the air.';
      // Add more cases as needed
      case 'clear':
        return 'Clear weather means the sky is free of clouds, resulting in unobstructed sunshine and generally stable atmospheric conditions.';
      case 'drizzle':
        return 'Drizzle is light rain with very small, fine droplets that fall slowly and usually lasts for a longer period than heavier rain showers.';
      case 'mist':
        return 'Mist forms when warm, moist air cools rapidly, causing water vapor to condense into tiny droplets suspended in the air.';
        case 'haze':
          return 'Haze occurs when tiny particles or pollutants in the air scatter sunlight, reducing visibility and making the air appear murky or foggy.';
      default:
        return 'Typical weather for the season.';
    }
  };

  const weatherReason = getWeatherReason(details);
    const verticalDetails=[
        {
            id:1,
            Icon: FaThermometerEmpty,
            title:'Feels like',
            value:`${feels_like.toFixed()}°`,
        },
        {
            id:2,
            Icon: BiSolidDropletHalf,
            title:'Humidity',
            value:`${humidity.toFixed()}%`,
        },
        {
            id:3,
            Icon: FiWind,
            title:'Wind',
            value:`${speed.toFixed()} ${ units==='metric' ?'km/h':'m/s'}`,
        },
    ]
    const HorizontalDetails=[
        {
            id:1,
            Icon: GiSunrise,
            title:'Sunrise',
            value:sunrise,
        },
        {
            id:2,
            Icon: GiSunset,
            title:'Sunset',
            value:sunset,
        },
        {
            id:3,
            Icon: MdKeyboardArrowUp,
            title:'High',
            value:`${temp_max.toFixed()}°`,
        },
        {
            id:4,
            Icon: MdKeyboardArrowDown,
            title:'Low',
            value:`${temp_min.toFixed()}°`,
        },
        {
          id:5,
          Icon: MdEqualizer ,
          title:'Average',
          value:`${averageTempDisplay}°C`,
      },
    ]
  return (
    <div>
       <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
        <div className='text-center'>
          <p>{details}</p>
          <p className='text-lg text-white'>{`Reason: ${weatherReason}`}</p>
        </div>
      </div>
      <div className='flex flex-row items-center justify-between py-3'>
        <img src={icon} alt="weather icon" className='w-20'/>
   
      <p className='text-5xl'>{`${temp.toFixed()} ${units==='metric'? '°C':'°F'}`}</p>
      <div className='flex flex-col space-y-3 items-start'>

      {
        verticalDetails.map(({id, Icon,title,value})=>(
            <div key={id} className='flex font-light text-sm items-center justify-center'>
            <Icon size={18} className='mr-1'/>
            {`${title}:`}
            <span className='font-medium ml-1'>{value}</span>
        </div>
        ))
      }
        
      </div>
    </div>
    <div className='flex flex-row items-center justify-center space-x-10 text-sm py-3'>
    {
        HorizontalDetails.map(({id, Icon,title,value})=>(
            <div key={id} className='flex flex-row items-center'>
            <Icon size={30} className='mr-1'/>
            <p className='font-light ml-1'>
            {`${title}:`}
            <span className='font-medium ml-1'>{value}</span>
            </p>
        </div>
        ))
      }
        
    </div>
    </div>
  )
}

export default TempAndDetails
