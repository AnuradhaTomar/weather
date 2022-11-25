// import { DateTime } from "luxon";

// const API_KEY = "e1798c8ddaaf0064d3861ac297e991e8";
// const BASE_URL = "https://api.openweathermap.org/data/2.5";

// const GetWeatherData = ({infoType, searchParams}) => {
//    const url = new URL(BASE_URL + "/" + infoType);
//    url.search = new URLSearchParams({...searchParams, appid: API_KEY});
//    console.log("url.search", url.search);
   
//    return fetch(url).then((res) => res.json()).then((data) => data);
// }

// const formatCurrentWeather = (data) => {
//      const {
//         coord: {lat, lon},
//         main: {temp, feels_like, temp_min, temp_max, humidity},
//         name,
//         dt,
//         sys: {country, sunrise, sunset},
//         weather,
//         wind: {speed}
//      } = data  

//      const {main: details, icon} = weather[0]
 
//      return {lat, lon, temp, feels_like, temp_min, temp_max, name, humidity, dt, country, sunrise, sunset, speed, details, icon}
// } 
// const formatforecastWeather = (data) => {
//        let {timezone, daily, hourly} = data;
//        daily = daily.slice(1,6).map(d => {
//         return{
//             title: formatToLocalTime(d.dt, timezone, 'ccc'),
//             temp: d.temp.day,
//             icon: d.weather[0].icon
//         }
//        });
//        return {timezone, daily, hourly};
// }

// const getFormattedWeatherData = async (searchParams) => {
//     const formattedData = await GetWeatherData('weather', searchParams).then(formatCurrentWeather)
    
//     const {lat, lon} = formatCurrentWeather
    
//     const formattedforecastWeather = await GetWeatherData('onecall', {
//         lat, lon, exclude: 'current, minutely, alerts', units: searchParams.units
//     }).then(formatforecastWeather)
//     return {...formatCurrentWeather, ...formattedforecastWeather};
// }

// const formatToLocalTime = (secs, zone, format = "cccc, dd LLL, yyyy' | Local time: 'hh:mm a") => {
//     DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
// }

// const iconUrlFromCode = (code) => `${code}{weather}`

// export default getFormattedWeatherData;

// export {formatToLocalTime, iconUrlFromCode};

// useEffect(
//     (data) => {
//       const fetchWeatherData = async () => {
//         await getFormattedWeatherData(...query, units).then((data) => {
//           setWeather(data);
//         });
//         console.log(data);
//       };
//       fetchWeatherData();
//     },
//     [query, units]
//   );