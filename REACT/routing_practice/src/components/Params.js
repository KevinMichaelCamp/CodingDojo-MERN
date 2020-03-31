import React from 'react';

const Params = props => {
    const styles = {
        color: props.textColor,
        background: props.bgColor
    }

    return (
        <h1 style={styles}>The word is: {props.word}</h1>
    )
}
export default Params;