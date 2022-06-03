import { useEffect, useReducer, useState } from "react"
import { weatherReducer, initialState } from "../reducer/weatherReducer";
import { getRandomPhoto, getWeatherData } from "../services/weatherServices";
import { Welcome } from "../component/Welcome/Welcome";
import {Time} from "../component/Time/Time"
import { Agenda } from "../component/Agenda/Agenda";
import home from "./home.module.css"

export const Home = () =>{

    //const[{latitude,longitude,weatherData}, dispatchWeather] = useReducer(weatherReducer,initialState)

    const [latitude,setLatitude]=useState(null);
    const [longitude,setLongitude]=useState(null);
    const [weatherData,setWeatherData]=useState(null);
    const [randomPicture, setRandomPicture] = useState(null)
    const [name,setName] = useState(null);
    const [task,setTask] = useState(null);

    const setUserName = (e) => {
        let key = e.key
        if(key === 'Enter'){
            setName(e.target.value)
        }
    }

    const setUserTask = (e) => {
        let key = e.key
        if(key === 'Enter'){
            setTask(e.target.value)
        }
    }
   
    useEffect(()=>{
        /** 
            Navigator is an interface that represents the state and identity of the user agent.
            Navigator property can also retrieved using window.navigator 
        **/
        navigator.geolocation.getCurrentPosition((position)=>{
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        })

        getRandomPhoto(setRandomPicture);
        if(latitude && longitude){
            getWeatherData(latitude,longitude,setWeatherData);
        }
    },[latitude,longitude])

    return (
        <>
            <div className={`container-fluid ${home.flex} ${home.flex__col} ${home.main}`} style={{backgroundImage : `url(${randomPicture})`}}>
                <div className={`${home.flex} ${home.flex__col} ${home.pd__rl}`}>
                    <div className={`${home.flex} ${home.jc__center} ${home.ai__center}`}>
                        <span className={`${home.ml__auto}`}>
                            <img className={`${home.icon__height}`} title={weatherData && weatherData.weather[0].main} 
                                src={`https://openweathermap.org/img/wn/${weatherData && weatherData.weather[0].icon}@2x.png`}
                            alt={weatherData && weatherData.weather[0].icon} />
                        </span>                        
                         <span className={`${home.weather_font}`} >{weatherData && weatherData.main.temp.toFixed()}<span></span>°</span>
                    </div>
                    <span className={`${home.ml__auto} ${home.mt__1}`}>{weatherData && weatherData.name}</span>
                </div>
                {
                    name === null ?
                        <Welcome captureKey={setUserName}/>
                        :
                        <>
                            <Time name={name} />
                            <Agenda  captureKey={setUserTask} userTask={task} />
                        </>
                }
            </div>
        </>
    )
}