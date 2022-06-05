import { useEffect, useState } from "react"
import {getRandomQuote} from "../../services/weatherServices"
import {useToast} from "../../customHooks/useToast"
import style from "./quote.module.css"

export const Quote = () => {
    const { showToast } = useToast();
    const [quote, setQuote] = useState('A little knowledge that acts is worth infinitely more than much knowledge that is idle');
    
    useEffect(()=>{
        getRandomQuote(setQuote)
    },[])
    return (
        <>
            <div className={`${style.box__shadow} ${style.pd__2} ${style.mt__3} ${style.font__fam}`}>
                {quote}
            </div>

        </>
    )
}