# Weathrly : Weather Forecast Website

## Overview

This project is a weather forecast website developed using React. It provides real-time weather updates and various features to enhance user experience, including temperature conversion, background color changes based on temperature, and more.

### Key Features

- **Weather Information Display**: Shows date, time, dominant weather condition, reason, city name, humidity, feels like, min temp, max temp, average temp, sunset, sunrise, 3-hour step forecast, and 5-day daily forecast.
- **City Search**: Allows users to input a city name to get the weather information.
- **Temperature Conversion**: Converts temperature between Celsius and Fahrenheit.
- **Dynamic Background**: Changes the background color to blue for temperatures below 25°C and yellow otherwise.
- **High Temperature Alert**: Displays a warning toast if the temperature exceeds 32°C.
- **Real-Time Data**: Fetches real-time weather data every five minutes for metro cities in India.
- **Current Location Weather**: Option to fetch weather data for the current location.

### Technologies Used

- **React**: JavaScript library for building user interfaces.
- **OpenWeatherMap API**: Provides weather data.
- **Toastify**: For displaying alert messages.
- **React Luxon**: For date and time formatting.
- **React Icons**: For adding icons to the UI.

### Getting Started

Follow these steps to set up and run the project locally.

#### Prerequisites

- Node.js and npm (or Yarn) installed on your machine.
- A code editor (e.g., VS Code).

#### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Anchal899/Weathrly.git
   cd Weathrly

Install Dependencies

bash
Copy code
npm install
Configure Environment Variables

Create a .env file in the root directory of the project and add the following variables:

makefile
Copy code
VITE_WEATHER_API_KEY=your_openweathermap_api_key
VITE_WEATHER_BASE_URL=https://api.openweathermap.org/data/2.5
Run the Development Server

bash
Copy code
npm run dev
The application will be available at http://localhost:3000/.

Design Choices
Background Color: The background color changes based on temperature to provide visual feedback on weather conditions.
High Temperature Alert: A warning toast is displayed for temperatures exceeding 32°C to alert users of extreme weather conditions.
Real-Time Data: Fetching data every five minutes ensures the weather information is up-to-date.
Current Location Weather: Enhances user convenience by providing weather data for the user's current location.
Deployment
The application is deployed on Vercel: https://weathrly.vercel.app/.


