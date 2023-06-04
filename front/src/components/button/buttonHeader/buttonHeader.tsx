import React from 'react';

interface ButtonProps {
    text: string;
    iconSrc: string;
    altText: string;
    specificity: string;
    onClick?: () => void; // Remove the optional modifier (?)
}

const ButtonHeader: React.FC<ButtonProps> = ({
    text,
    iconSrc,
    altText,
    specificity,
    onClick, // Destructure the onClick prop
}) => {
    return (
        <button className={`btn-primary ${specificity}`} onClick={onClick}>
            <img className="icon-button" src={iconSrc} alt={altText} />
            {text}
        </button>
    );
};

export default ButtonHeader;
