import { useState } from "react";
import Output from "./Output";

const Greeting = () =>{
    const [changeText, setchangeText] = useState(false)
    const changeTextHandler=()=>{
        setchangeText(true);
    }
    return (
        <div>
            <h2>Hello world!</h2>
            {!changeText && <Output>It's good to see you!</Output>}
            {changeText && <Output>Change!</Output>}
            <button onClick={changeTextHandler}></button>
        </div>
    )
}
export default Greeting;