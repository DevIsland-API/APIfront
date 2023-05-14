import React from 'react';
import './buttonGeneral.css';

const ButtonGeneral = ({ onClick, children, className }) => {
    return (
        <button className={`general-button ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default ButtonGeneral;
