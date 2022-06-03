import {Input} from "../Input/Input";
import agenda from "./agenda.module.css";

export const Agenda = ({captureKey,userTask}) => {
    return (
        <>
            <div>
                {   
                    userTask === null ?
                    <>
                        <p className={`${agenda.font__size}`}>Any task in mind ? Lets get it done..</p>
                        <Input type="text" onKeyPressHandler={captureKey} />
                    </>                    
                    :
                    <p className={`${agenda.font__size} ${agenda.flex}`}>
                        <span className="material-icons-outlined">task</span>
                        {`Task for today is ${userTask}`}
                        <span className={`material-icons-outlined cursor ${agenda.pointer}`}>more_horiz</span>
                    </p>
                }
            </div>
        </>
    )
}

{/*  

*/}