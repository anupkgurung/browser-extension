
export const getRandomPhoto = async (setRandomPicture) => {
    try {
        setRandomPicture(localStorage.getItem("random"))
        //  const data = await fetch(`${process.env.REACT_APP_UNSPLASH_API_URL}?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`,{method : 'GET'})
        //         .then(response => response.json())
        //         .then(result => {
        //              console.log(result)
        //              setRandomPicture(result)
        //         })
    } catch (error) {
        console.log(error)
    }
}

export const getWeatherData = async (latitude,longitude,setWeatherData) => {
    try {
        let weather= JSON.parse(localStorage.getItem("weather"))
        console.log(`${process.env.REACT_APP_WAETHER_API_URL}/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`)
        setWeatherData(weather)
        // await fetch(`${process.env.REACT_APP_WAETHER_API_URL}/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`)
        //     .then(response => response.json())
        //     .then(result => {
        //         console.log(result)
        //         localStorage.setItem("weather",JSON.stringify(result))
        //         setWeatherData(result)
        //     })
   } catch (error) {
       console.log(error)
   }
}
