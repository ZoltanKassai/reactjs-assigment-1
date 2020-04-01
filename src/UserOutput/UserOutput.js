import React from "react";

const userOutput = (props) => {
    return (
        <div className='UserOutput'>
            <p onClick={props.click}>Username: {props.username}</p>
            <p onClick={props.click}>Password: {props.password}</p>
        </div>
    )
};

export default userOutput;