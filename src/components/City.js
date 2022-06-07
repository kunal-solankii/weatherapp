import { useEffect, useState } from "react"
import axios from 'axios'
import ShowWeather from "./ShowWeather";
import './css/input-box.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apikey } from "./ApiKey";


export default function City() {
    const [data, setWeatherData] = useState('');
    const [datageo, setGeoData] = useState('');
    const [datap, setPollutionData] = useState('');
    // const [isReadyToFetch, setIsReadyToFetch] = useState(false)
    const [city, setCity] = useState('');
    // const apikey = "a3be4c819e5f6b4e803224ef25aee4d5";
    var urlgeocode;
    var urlweather;
    var urlpollution;
    useEffect(() => {
        fetchWeatherAndPollutionData();

    }, [datageo])


    const handleChange = (event) => {
        setCity(event.target.value);
        console.log(city);

    }
    function checkData(data) {
        if (data) {
            setGeoData(data);
        }
        else {
            console.log('Error checking data')

        }
    }
    async function sendDataToFetch() {
        urlgeocode = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + apikey;

        await axios.get(urlgeocode).then(response =>
            checkData(response.data)
            //console.log(response.data)
            //setGeoData(response.data)

            //console.log('GeoCoding'+response.data)
        ).catch(function error(err) {
            console.log(err)
        })

    }
    async function fetchWeatherAndPollutionData() {
        if (datageo) {
            try {
                urlpollution = "https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=" + datageo[0].lat + "&lon=" + datageo[0].lon + "&appid=" + apikey;
                urlweather = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apikey;
            } catch (err) { toast.error('City Not Found') };
            await axios.get(urlweather).then(response => {
                setWeatherData(response.data)
                console.log(response.data);
            }).catch((err) => console.log('Error Caught While Fetching Weather Data ' + err.message))

            await axios.get(urlpollution).then(response => {
                setPollutionData(response.data);
                console.log(response.data);
            }).catch((err) => console.log('Error Caught while Fetching Pollution Data ' + err))
        }

    }




    return (
        <div className="text-3xl">
            <div className="flex justify-center">
                <div className="mt-1 relative rounded-md shadow-sm input-box ">
                    <input
                        type="text"
                        name="city"
                        value={city}
                        onChange={handleChange}
                        className="focus:ring-indigo-500 focus:border-indigo-500 block  pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                        placeholder="Enter City Name"
                    />
                </div>
                <button className="group input-box relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => sendDataToFetch()
                        .then(console.log('Function call Executed')
                        )}>
                    Search

                </button>
            </div>

            {data ? <ShowWeather temp={data.main.temp}
                feelslike={data.main.feels_like}
                name={data.name} des={data.weather[0].description}
                mintemp={data.main.temp_min}
                maxtemp={data.main.temp_max}
                humidity={data.main.humidity}
                sunrise={data.sys.sunrise}
                sunset={data.sys.sunset}
                aqi={datap ? datap.list[0].main.aqi : null}
            /> : null}

            {<ToastContainer
                position="bottom-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />}
        </div>
    )

}


