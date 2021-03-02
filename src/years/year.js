import React from 'react';
const Year = (props) => {
    return (
        <p onClick = {props.click}>{props.year}</p>
    )
};

export default Year;