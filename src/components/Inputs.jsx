import React from 'react'
import { useState } from 'react';
import {BiSearch, BiCurrentLocation} from 'react-icons/bi';

const Inputs = ({setQuery,setUnits}) => {
  const [city,setCity]=useState("")
  const [temp, setTemp] = useState(25); // default temperature, adjust as needed
  const convertTemp = (newUnits) => {
    if (newUnits === 'metric') {
      setTemp(((temp - 32) * 5) / 9); // Convert to Celsius
    } else {
      setTemp((temp * 9) / 5 + 32); // Convert to Fahrenheit
    }
    setUnits(newUnits);
  };
  const handleSearchClick=()=>{
    if(city!=="")setQuery({q:city});
  }
  const handleLocationClick=()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        const{latitude,longitude}=position.coords
        setQuery({lat:latitude, lon:longitude})
      })
    }
  }
  return (
    <div className='flex flex-row justify-center my-6'>
      <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input value={city} onChange={(e)=>setCity(e.currentTarget.value)} type="text" placeholder='search by city...' className='text-gray-500 text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase'/>
        <BiSearch size={30} onClick={handleSearchClick} className='cursor-pointer transition ease-out hover:scale-125'/>
        <BiCurrentLocation size={30} onClick={handleLocationClick} className='cursor-pointer transition ease-out hover:scale-125'/>
      </div>
      <div className='flex flex-row w-1/4 items-center justify-center'>
        <button onClick={() => convertTemp('metric')} className='text-2xl font-medium transition ease-out hover:scale-125'>°C</button>
        <p className='text-2xl font-medium mx-1'>|</p>
        <button onClick={() => convertTemp('imperial')} className='text-2xl font-medium transition ease-out hover:scale-125'>°F</button>
      </div>
    </div>
  )
}

export default Inputs
