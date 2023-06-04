import React from 'react';
import Select from '../../select/select';
import Input from '../../inputs/input/input';
import ButtonGeneral from '../../button/buttonGeneral/buttonGeneral';

import './modalNewUser.css'

const ModalNewUser = ({ isOpen, onClose, title, description }) => {
    if (!isOpen) {
        return null;
    }

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];

    return (
        <div id="modal-overlay-new-user">
            <div className="modal-new-user">
                <button className="modal-close-new-user" onClick={onClose}>
                    <span className="modal-close-icon-new-user">&times;</span>
                </button>
                <div className="card-header-new-user">
                    <h3 className="card-title-new-user">{'Novo Usuário'}</h3>

                    <Input
                        type='text'
                        id="input-name"
                        name="input-name"
                        title="Nome sobrenome"
                        placeholder="Escreva o nome"
                    />

                    <Input
                        type='text'
                        id="input-cpf"
                        name="input-cpf"
                        title="CPF"
                        placeholder="Escreva o CPF"
                    />


                    <Select id="Select1" title="Cargo" className="select-new-user" showOptionsOrder={false} options={options} />
                    <Select id="Select2" title="Permissões" className="select-new-user" showOptionsOrder={false} options={options} />
                    <Select id="Select2" title="Equipe" className="select-new-user" showOptionsOrder={false} options={options} />

                    <ButtonGeneral className={'button-finish'} onClick={onClose}>Finalizar e criar</ButtonGeneral>
                </div>
                <div className="modal-footer-new-user">

                </div>
            </div>
        </div>
    );
};

export default ModalNewUser;
