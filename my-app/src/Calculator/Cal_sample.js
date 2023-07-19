import { useState } from "react"

export default function Calculator(){

    const [number,setNumber]=useState(0);

    const handleClick=(event)=>{
        const value=event.target.name;
        setNumber(number.concat(value))
    }
    const calculate=()=>{
        try{                                                                      
        setNumber(eval(number).toString());
    }
    catch(err){                                                                                                                                                     
        setNumber('number')
    }
    }
    const clear=()=>{
        setNumber('')
    }
    return(
        <>
            <input type="text" value={number}/>

            <button onClick={handleClick} name="1">1</button>
            <button onClick={handleClick} name="2">2</button>
            <button onClick={calculate} name="=">=</button>
            <button onClick={clear}name="clear">clear</button>
            <button onClick={handleClick} name="+">plus</button>
            
w        </>
    )
}