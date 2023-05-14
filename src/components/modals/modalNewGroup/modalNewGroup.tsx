import React from 'react';
import Select from '../../select/select';
import Input from '../../inputs/input/input';
import ButtonGeneral from '../../button/buttonGeneral/buttonGeneral';

import './modalNewGroup.css'

const ModalNewGroup = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];

    return (
        <div id="modal-overlay-new-group">
            <div className="modal-new-group">
                <button className="modal-close-new-group" onClick={onClose}>
                    <span className="modal-close-icon-new-group">&times;</span>
                </button>
                <div className="card-header-new-group">
                    <h3 className="card-title-new-group">{'Novo Grupo'}</h3>

                    <Input
                        type='text'
                        id="input-group"
                        name="input-group"
                        title="Nome do Grupo"
                        placeholder="Nome do Grupo"
                    />

                    <Select id="Select1" title="Líder" className="select-new-group" showOptionsOrder={false} options={options} />

                    <Select id="Select2" title="Membros" className="select-new-group" showOptionsOrder={false} options={options} />

                    <ButtonGeneral className={'button-finish'} onClick={onClose}>Finalizar e criar</ButtonGeneral>
                </div>
                <div className="modal-footer-new-group">

                </div>
            </div>
        </div>
    );
};

export default ModalNewGroup;
