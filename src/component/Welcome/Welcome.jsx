import {Input} from "../Input/Input";
import welcome from "./welcome.module.css"

export const Welcome = ({captureKey}) => {
    return (
        <>
            <div className={`${welcome.pt__2}`}>
                   <h1>Hey There! What do i call you ?</h1>
                   <Input type="text" onKeyPressHandler={captureKey} />
            </div>
        </>
    )
}