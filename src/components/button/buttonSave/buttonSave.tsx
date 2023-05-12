import React, { useRef, useState } from 'react';
import './buttonSave.css';

interface Props {
    onClick: () => void;
    onClose: () => void;
}

const ButtonSave: React.FC<Props> = ({ onClick }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const handleSave = () => {
        setIsLoading(true);
        onClick();
        setTimeout(() => {
            setIsLoading(false);
            setIsSaved(true);
            setTimeout(() => {
                window.location.href = '/chamados/all';
            }, 1000);
        }, 2000);
    };

    return (
        <div>
            <div className="button-save">
                {isLoading ? (
                    <div id="modal-save">
                        <div className="modal">
                            <div className="spinner"></div>
                            <p>Salvando...</p>
                        </div>
                    </div>
                ) : isSaved ? (
                    <div id="modal-save">
                        <div className="modal">
                            <p>Dados salvos com sucesso!</p>
                        </div>
                    </div>
                ) : (
                    <>
                        <button onClick={handleSave} className="file-button">
                            Criar Demanda
                        </button>
                        <input type="submit" className="file-input" ref={fileInputRef} onClick={handleSave} />
                    </>
                )}
            </div >
        </div>
    );
}

export default ButtonSave;
