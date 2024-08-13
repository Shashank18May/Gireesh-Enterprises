import React from 'react'

function Feature(props) {
    return (
        <div className="feature">
            <i className={`feature-icon ${props.icon}`}></i>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
}

export default Feature;
