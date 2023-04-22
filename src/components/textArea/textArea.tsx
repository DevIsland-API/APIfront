import React from 'react';
import './textArea.css';

interface Props {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    title: string;
}

const TextArea = ({ title }: Props) => {
    return (
        <div className="textarea-wrapper">
            <label className='label-text' style={{ position: 'sticky', top: 0 }}>{title}</label>
            <textarea
                placeholder="Dê mais detalhes sobre sua solicitação"
                className="textarea"
            />
        </div>
    );
};

export default TextArea;
