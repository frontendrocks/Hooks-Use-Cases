import React, { useEffect, useState } from 'react';

const UseEffectInput = () => {
  
    const [input, setInput] = useState('');
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {    
        if (input.length < 5) {
            setIsValid(false);
        } else {
            setIsValid(true);
         }
    }, [input])

    return (
        <div>
            <input
                onChange={(e)=> setInput(e.target.value)}
                type='text'
                autoComplete='off'
                placeholder='Enter valid text' />
            <span style={isValid ? { backgroundColor: "lightgreen", padding: ".5em" }
                : { backgroundColor: "lightpink", padding: ".5em" }}>
                {isValid ? "Invalid Input": "valid Input fields"}
                </span>
        </div>
    )
      

}

export default UseEffectInput
