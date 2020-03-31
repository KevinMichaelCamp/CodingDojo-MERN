import React from 'react';

const Param = props => {
    return (
        <div>
            {isNaN(props.param) ? <h1>The word is: {props.param}</h1> : <h1>The number is: {props.param}</h1>}
        </div>
    )
}

export default Param;