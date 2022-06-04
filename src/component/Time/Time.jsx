import { useEffect, useState } from "react"
import time from "./time.module.css"

export const Time = ({name}) => {
    const [date, setDate] = useState(new Date())
    const [greeting , setGreeting] = useState('Good Morning')

    const getGreeting = () => {
        const hour = date.getHours()
        if(hour < 12){
            return setGreeting('Good Morning')
        }else if(hour >= 12 && hour <= 16){
            return setGreeting('Good Afternoon')
        }else if(hour > 16 && hour <= 20){
            return setGreeting('Good Evening')
        }else {
            return setGreeting('Good Night')
        }
    }

    const refreshTime = () => {
        setDate(new Date())
    }
    useEffect(()=>{
        getGreeting()
        const id = setInterval(refreshTime,1000)
        return ()=> clearInterval(id)
    },[])

    return (
        <>
            <div className={`${time.flex}`}>
                <span className={`${time.time__font} ${time.mb} ${time.txt__decor}`}>{date.toLocaleTimeString().substring(0,date.toLocaleTimeString().lastIndexOf(":"))}</span>
                <span className={`${time.greet__font} ${time.pt__1_5}`}>{greeting} {name}</span>
            </div>
        </>
    )
}