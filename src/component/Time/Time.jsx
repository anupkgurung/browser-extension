import { useEffect, useState } from "react"
import time from "./time.module.css"

export const Time = ({name}) => {
    const [date, setDate] = useState(new Date())

    const refreshTime = () => {
        setDate(new Date())
    }
    useEffect(()=>{
        const id = setInterval(refreshTime,1000)
        return ()=> clearInterval(id)
    },[])

    return (
        <>
            <div className={`${time.flex}`}>
                <span className={`${time.time__font} ${time.mb}`}>{date.toLocaleTimeString().substring(0,date.toLocaleTimeString().lastIndexOf(":"))}</span>
                <span className={`${time.greet__font}`}>Good Evening {name}</span>
            </div>
        </>
    )
}