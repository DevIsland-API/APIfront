import React, { useState } from 'react';
import './select.css';
import iconRemove from '../../images/icon-remove-black.svg'


interface Option {
    value: string;
    label: string;
}

interface SelectProps {
    id: string;
    title: string;
    className: string;
    options: Option[];
}

function Select(props: SelectProps) {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    function handleOptionSelect(event: React.ChangeEvent<HTMLSelectElement>) {
        const selectedOption = event.target.value;
        setSelectedOptions([...selectedOptions, selectedOption]);
    }

    function handleOptionRemove(indexToRemove: number) {
        const updatedOptions = selectedOptions.filter((_, index) => index !== indexToRemove);
        setSelectedOptions(updatedOptions);
    }

    return (
        <div className="select-container-options">
            <label className='label-select' htmlFor={props.id}>{props.title}</label>
            <select id={props.id} className={props.className} onChange={handleOptionSelect}>
                {props.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <div className='options-order'>
                {selectedOptions.map((option, index) => (
                    <div key={option} className="selected-option">
                        <span>{option}</span>
                        <button className="button-remove" onClick={() => handleOptionRemove(index)}>
                            <img src={iconRemove} alt="icon-remove" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Select;
