import React from 'react';
import './Person.css';
const person=(props)=>
{
    return (
        <div className="Person">
            <p onClick={props.click}>I am {props.name} and I'm {props.age}years old person.</p>
            <input type="text" onChange={props.changed}/>
            <p>{props.children}</p>
        </div>
)
};
export default person;