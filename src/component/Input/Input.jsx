import input from "./Input.module.css";

export const Input = ({type='text',onChangeHandler=()=>{},onKeyPressHandler=()=>{}}) => {
    return (
        <>
            <input type={type} onKeyDown={onKeyPressHandler} className={`${input.border}`} onChange={onChangeHandler} />
        </>
    )
}