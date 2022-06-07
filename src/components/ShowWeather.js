import { SunIcon } from '@heroicons/react/outline';

export default function ShowWeather(props) {

  return (<>
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">{props.name}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Weather Forecast
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          </p>
        </div>
        <div className='content-center lg:text-center'>
          <div className='flex justify-center'>
            <SunIcon className="w-16 l-16"/>
          </div>
          <p className="text-lg font-medium text-gray-900 hover:text-2xl">Current Temperature : {KelvinToCelcius(props.temp)}&deg; C</p>
          <p className="text-base text-gray-700 hover:text-xl">Feels like {KelvinToCelcius(props.feelslike)}&deg; C
            <br />
            <span>Humidity : {props.humidity}%</span>
            <br/>
            <span>Sunrise : {DateConverter(props.sunrise,'AM')}</span>
            <br/>
            <span>Sunset : {DateConverter(props.sunset,'PM')}</span>
            <br/>
            <span>Pollution Level : {props.aqi}</span>
            <br/>
            <span className='text-sm text-gray-500'>(On a scale of 1 - 5 Where 1 = Good and 5 = Very Poor.)</span>

          </p>
        </div>
      </div>
      
    </div>
   
    </>
)
}

export function KelvinToCelcius(temp) {
  return (temp - 273.15).toFixed(1);
}

export function DateConverter(dat,ampm) {
  var convdate = new Date(dat*1000);
  //console.log(convdate);
  var hours=convdate.getHours();
  var minutes=convdate.getMinutes();
  var sec=convdate.getSeconds();
  return hours+':'+minutes+':'+sec+': '+ampm;
}



