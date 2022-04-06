import React from "react"

function Keypad() {
    function handlePWChange() {
        console.log('Entering password...')
    }
    return(
        <input type="password" onChange={handlePWChange}></input>
    );
};

export default Keypad;
