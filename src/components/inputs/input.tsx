import React, { ChangeEvent } from 'react';
import './input.css';

interface InputProps {
    id: string;
    name: string;
    title: string;
    placeholder: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}

const Input: React.FC<InputProps> = ({
    id,
    name,
    title,
    placeholder,
    onChange,
    value,
}) => {
    return (
        <div className="form-group">
            <div className="form-header">
                <label className="title-input" htmlFor={id}>
                    {title}
                </label>
            </div>
            <div className="form-input-container">
                <input
                    type="text"
                    id={id}
                    name={name}
                    className="form-input"
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                />
            </div>
        </div>
    );
};

export default Input;
