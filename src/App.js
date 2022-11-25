
import './App.css';
import TopButtons from './Components/TopButtons.jsx'
import Input from './Components/Input.jsx'
import TimeandLocation from './Components/TimeandLocation.jsx'
import TemperatureDetails from './Components/TemperatureDetails.jsx'
import Forecast from './Components/Forecast.jsx'
import getFormattedWeatherData from './Services/Weatherservices';
// import UilReact from '@iconscout/react-unicons/icons/uil-react';
function App() {
  const fetchWeatherData = async() => {
    const data = await getFormattedWeatherData( { q: "london" });
    console.log(data);
  };
  fetchWeatherData();

  return (
    <div className="mx-auto max-w-screen-md mt-4 px-32 py-5 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons/>
      <Input />
      <TimeandLocation />
      <TemperatureDetails />
      <Forecast title="Hourly Forecast" />
      <Forecast title="Daily Forecast" />
    </div>
  );
}

export default App;
