import React, { useRef } from 'react';
import './buttonSave.css';

interface Props {
    onClick: () => void;
}

const ButtonSave: React.FC<Props> = ({ onClick }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className="button-save">
            <button onClick={handleButtonClick} className="file-button">
                Criar Demanda
            </button>
            <input type="submit" className="file-input" ref={fileInputRef} onChange={onClick} />
        </div>
    );
}

export default ButtonSave;
