import React, { useState } from 'react';
import './inputRadius.css';

function InputRadius() {
    const [selectedOption, setSelectedOption] = useState('option1');

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <div>
            <label>
                <input
                    type="radio"
                    name="options"
                    value="option1"
                    checked={selectedOption === 'option1'}
                    onChange={() => handleOptionClick('option1')}
                    className="input-option-radio"
                />
                <span className="input-option-text">
                    Feature
                </span>
            </label>
            <label>
                <input
                    type="radio"
                    name="options"
                    value="option2"
                    checked={selectedOption === 'option2'}
                    onChange={() => handleOptionClick('option2')}
                    className="input-option-radio"
                />
                <span className="input-option-text">
                    Hotfix
                </span>
            </label>
        </div>
    );
}

export default InputRadius;
