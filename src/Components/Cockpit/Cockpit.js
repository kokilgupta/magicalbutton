import React from 'react';
import './Cockpit.css';

const cockpit=(props)=>{
    const buttonStyle=[];
    if(props.persons.length<2)
    {
        buttonStyle.push('red');
    }
    if(props.persons.length===1)
    {
        buttonStyle.push('bold');
    }

    return(
        <div className="Cockpit">
            <h1>Hi Kokil</h1>
            <p className={buttonStyle.join(' ')}>Hey</p>
            {props.x <2 ?
                <button
                    className={'style'}
                    onClick={props.clicked}>
                    Click me to see magic
                </button>
                : null
            }
        </div>
    );
};
export default cockpit;
