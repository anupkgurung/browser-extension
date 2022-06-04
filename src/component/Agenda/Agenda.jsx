import { useState } from "react";
import {Input} from "../Input/Input";
import agenda from "./agenda.module.css";

export const Agenda = () => {

    const [task,setTask] = useState(null);
    const setUserTask = (e) => {
        let key = e.key
        if(key === 'Enter'){
            setTask(e.target.value)
        }
    }
    const editAgenda = () => {
        setTask(null)
    }

    return (
        <>
            <div>
                {   
                    task === null ?
                    <>
                        <p className={`${agenda.font__size}`}>Any task in mind ? Lets get it done..</p>
                        <Input type="text" onKeyPressHandler={setUserTask} value={task} />
                    </>                    
                    :
                    <p className={`${agenda.font__size} ${agenda.flex}`}>
                        <span className={`material-icons-outlined ${agenda.pr__1}`}>task</span>
                        {`Task for today is ${task}`}
                        {/* <span className={`material-icons-outlined cursor ${agenda.pointer}`}>more_horiz</span> */}
                        <span className={`material-icons-outlined cursor ${agenda.pointer} ${agenda.pl__1}`} onClick={editAgenda}>edit</span>
                    </p>
                }
            </div>
        </>
    )
}

{/*  

*/}