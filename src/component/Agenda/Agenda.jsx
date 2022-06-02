import {Input} from "../Input/Input";
import agenda from "./agenda.module.css";

export const Agenda = ({captureKey}) => {
    return (
        <>
            <div>
                <p className={`${agenda.font__size}`}>Any task in mind ? Lets get it done..</p>
                <Input type="text" onKeyPressHandler={captureKey} />
            </div>
        </>
    )
}