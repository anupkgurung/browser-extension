export const initialState = {
        latitude:null, 
        longitude:null, 
        weatherData : null,
        randomPicture:null, 
        name:null
}

export const weatherReducer = (weatherState,{type,payload}) => {
    switch(type){
        case "SET_LATITUDE":
                return {...weatherState, latitude : payload}
        case "SET_LONGITUDE":
                return {...weatherState, longitude : payload}
        case "SET_WEATHER_DATA":
                return {...weatherState, weatherData : payload}
        case "SET_PICTURE":
                return {...weatherState, randomPicture : payload}
        case "SET_NAME":
                return {...weatherState, name : payload}
    }
}