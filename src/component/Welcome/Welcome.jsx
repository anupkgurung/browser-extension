import {Input} from "../Input/Input";

export const Welcome = ({captureKey}) => {
    return (
        <>
            <div>
                   <h1>Hey There! What do i call you ?</h1>
                   <Input type="text" onKeyPressHandler={captureKey} />
            </div>
        </>
    )
}