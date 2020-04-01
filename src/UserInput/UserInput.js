import React from "react";

const userInput = (props) => {
    return (
        <div className='UserInput'>
            <p>Type the new username: </p>
            <input type='text' onChange={props.changed} value={props.username}/>
        </div>
    )
};

export default userInput;