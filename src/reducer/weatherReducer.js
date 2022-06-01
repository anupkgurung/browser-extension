export const initialState = {latitude:[], longitude:[], weatherData : {}}

export const weatherReducer = (weatherState,{type,payload}) => {
    switch(type){
        case "SET_LATITUDE":
                return {...weatherState, latitude : payload}
        case "SET_LONGITUDE":
                return {...weatherState, longitude : payload}
        case "SET_WEATHER_DATA":
                return {...weatherState, weatherData : payload}
    }
}