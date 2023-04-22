import React, { useState } from 'react';
import Input from '../inputs/input';
import InputRadius from '../inputs/inputRadius/inputRadius';
import Select from '../select/select';
import TextArea from '../textArea/textArea';
import FileInput from '../inputs/fileInput/fileInput';
import ButtonSave from '../button/buttonSave';

import './modalDemand.css'
import { text } from 'stream/consumers';

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

const Modal = ({ isOpen, onClose }: Props) => {
    const [title, setTitle] = useState('');
    const [interested, setInterested] = useState('');
    const [description, setDescription] = useState('');
    const [isFeature, setIsFeature] = useState(false);
    const [isHotfix, setIsHotfix] = useState(false);

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleInterestedChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setInterested(event.target.value);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    const handleFeatureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsFeature(event.target.checked);
    };

    const handleHotfixChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsHotfix(event.target.checked);
    };

    const handleSave = () => {
        // implementar lógica de salvar o chamado com os dados preenchidos
    };
    function handleInputChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const value = event.target.value;
        // Faz algo com o valor inserido no campo
    }

    if (!isOpen) {
        return null;
    }

    document.title = 'Novo Chamado'

    return (

        <div className="modal-overlay">
            <div className="modal" style={{ width: '1052px', height: '564px' }}>
                {/* <button onClick={onClose}>X</button> */}
                <div className="modal-header">
                    <h3>Gerar Nova Demanda</h3>
                </div>
                <div className="form-group-radius">
                    <InputRadius />
                </div>
                <div className="modal-body" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ flex: 1 }}>
                        <div>
                            <Input id="input-1" name="input-name" title="Título" placeholder="Insira título" />
                        </div>

                        <div className="description-container" style={{ position: "sticky", top: 0 }}>
                            <TextArea
                                value={description}
                                onChange={handleDescriptionChange}
                                title="Descrição"
                            />
                        </div>

                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ flexDirection: 'column', alignItems: 'flex-end' }} className='description'>
                            <FileInput />
                            <div>
                                <Select title="Interessados" className="my-select" id="my-select" options={[
                                    { value: 'Usuario-A', label: 'Usuário A' },
                                    { value: 'Usuario-B', label: 'Usuário B' },
                                    { value: 'Usuario-C', label: 'Usuário C' },]}
                                />
                            </div>


                        </div>

                    </div>


                </div>
                <div className="button-save">
                    <ButtonSave onClick={handleSave} />
                </div>
            </div >
        </div >
    );
};

export default Modal;
