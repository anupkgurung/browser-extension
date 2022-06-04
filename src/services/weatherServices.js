import axios from "axios";

export const getRandomPhoto = async (dispatchWeather,showToast) => {
    try {
        const data = await axios.get(`${process.env.REACT_APP_UNSPLASH_API_URL}?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
        dispatchWeather({
            type : "SET_PICTURE",
            payload : data.data.urls.raw
        })
    } catch (error) {
        showToast("error", "Error getting random picture")
    }
}

export const getWeatherData = async (latitude,longitude,dispatchWeather,showToast) => {
    try {
        const lat = localStorage.getItem(latitude)
        const long = localStorage.getItem(longitude)
        if(lat === latitude && long === longitude){
            let weather= JSON.parse(localStorage.getItem("weather"))
            dispatchWeather({
                type : "SET_WEATHER_DATA",
                payload : weather.data
            })
        }else{
            localStorage.setItem("latitude",latitude);
            localStorage.setItem("longitude",longitude)

            const data =  await axios.get(`${process.env.REACT_APP_WAETHER_API_URL}/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`)
            localStorage.setItem("weather",JSON.stringify(data.data))
            dispatchWeather({
                type : "SET_WEATHER_DATA",
                payload : data.data
            })
        }
   } catch (error) {
        showToast("error", "Error getting weather Data")
   }
}

export const getRandomQuote = async (setQuote,showToast) => {
    try {
        const data = await axios.get("https://api.quotable.io/random?tags=wisdom&maxLength=100")    
        setQuote(data.data.content)        
    } catch (error) {
        showToast("error", "Error getting random Quote")
    }
}