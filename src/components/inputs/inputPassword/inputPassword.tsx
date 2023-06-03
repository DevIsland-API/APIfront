import React, { ChangeEvent, useState } from 'react';

interface InputProps {
    id: string;
    name: string;
    title: string;
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputPassword: React.FC<InputProps> = ({
    id,
    name,
    title,
    placeholder,
    value,
    onChange,
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
                    type="password"
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

export default InputPassword;
