import { useEffect, useReducer, useState } from "react"
import { weatherReducer, initialState } from "../reducer/weatherReducer";
import { getRandomPhoto, getWeatherData } from "../services/weatherServices";
import { Welcome } from "../component/Welcome/Welcome";
import {Time} from "../component/Time/Time"
export const Home = () =>{

    //const[{latitude,longitude,weatherData}, dispatchWeather] = useReducer(weatherReducer,initialState)

    const [latitude,setLatitude]=useState(null);
    const [longitude,setLongitude]=useState(null);
    const [weatherData,setWeatherData]=useState([]);
    const [randomPicture, setRandomPicture] = useState([])
    const [name,setName] = useState(null);

    const captureKey = (e) => {
        let key = e.key
        if(key === 'Enter'){
            setName(e.target.value)
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
            //getWeatherData(latitude,longitude,setWeatherData);
        }
    },[latitude,longitude])

    return (
        <>
            <div className="container-fluid" style={{backgroundImage : `url(${randomPicture})`, height:'100vh'}}>
                {
                    name === null ? 
                    <Welcome captureKey={captureKey}/>
                    :
                    <Time name={name} />
                }
            </div>
        </>
    )
}