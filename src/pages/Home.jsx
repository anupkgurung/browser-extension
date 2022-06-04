import { useEffect, useReducer, useState } from "react"
import { weatherReducer, initialState } from "../reducer/weatherReducer";
import { getRandomPhoto, getWeatherData } from "../services/weatherServices";
import { Welcome } from "../component/Welcome/Welcome";
import {Time} from "../component/Time/Time"
import { Agenda } from "../component/Agenda/Agenda";
import { Quote } from "../component/Quote/Quote"
import {useToast} from "../customHooks/useToast"
import home from "./home.module.css"

export const Home = () =>{
    const { showToast } = useToast();
    const[{latitude,longitude,weatherData,randomPicture,name}, dispatchWeather] = useReducer(weatherReducer,initialState)

    const setUserName = (e) => {
        let key = e.key
        if(key === 'Enter'){
            localStorage.setItem("name",e.target.value)
            dispatchWeather({
                type:"SET_NAME",
                payload:e.target.value
            })
        }
    }
   
    useEffect(()=>{
        document.title = "Home";
        const userName = localStorage.getItem("name");
        if(userName!==null) {
            dispatchWeather({ 
                type:"SET_NAME",
                payload:userName
            })
        }

        /** 
            Navigator is an interface that represents the state and identity of the user agent.
            Navigator property can also retrieved using window.navigator 
        **/
        navigator.geolocation.getCurrentPosition((position)=>{
            dispatchWeather({
                type:"SET_LATITUDE",
                payload:position.coords.latitude
            })
            dispatchWeather({
                type:"SET_LONGITUDE",
                payload:position.coords.longitude
            })
        })

        getRandomPhoto(dispatchWeather,showToast);
        if(latitude && longitude){
            getWeatherData(latitude,longitude,dispatchWeather,showToast);
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
                            <Agenda />
                            <Quote />
                        </>
                }
            </div>
        </>
    )
}