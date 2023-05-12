import React, { ChangeEvent, useState } from 'react';

interface InputProps {
    id: string;
    name: string;
    title: string;
    placeholder: string;
}

const InputPassword: React.FC<InputProps> = ({
    id,
    name,
    title,
    placeholder,
}) => {
    const [value, setValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

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
                    onChange={handleChange}
                    value={value}
                />
            </div>
        </div>
    );
};

export default InputPassword;
