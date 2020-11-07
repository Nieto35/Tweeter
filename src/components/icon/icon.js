import React from 'react';
import './styles.css';

const Icon = (props) => {
    return (
        <div className="t-icon">
            {props.source}
            {props.text}
        </div>
    )
}

export default Icon;