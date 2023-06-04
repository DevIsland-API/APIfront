import React from 'react';
import iconPersons from '../../../images/icon-persons.png';
import iconClip from '../../../images/icon-clip.png';
import iconPlus from '../../../images/circle-plus.png';
import Select from '../../select/select';
import ButtonGeneral from '../../button/buttonGeneral/buttonGeneral';

import './modalAnalyseDemand.css'

type ModalAnalyseDemandProps = {
    title: string;
    description: string;
    fileName: string;
    options: { value: string; label: string }[];
    onClose: () => void;
};

const ModalAnalyseDemand: React.FC<ModalAnalyseDemandProps> = ({
    title,
    description,
    fileName,
    options,
    onClose,
}) => {
    return (
        <div id="modal-overlay">
            <div className="modal">
                <button className="modal-close" onClick={onClose}>
                    <span className="modal-close-icon">&times;</span>
                </button>
                <div className="card-header">
                    <p className="card-feature">Feature</p>
                    <h3 className="card-title">{title}</h3>
                    <p className="card-description">{description}</p>
                    <div className="card-file">
                        <img src={iconClip} className="icon-clip" alt="Icon Clip" />
                        <p>{fileName}</p>
                        <img src={iconClip} className="icon-clip" alt="Icon Clip" />
                        <p>{fileName}</p>
                        <img src={iconPlus} className="icon-circle" alt="Icon Plus" />
                    </div>
                </div>
                <div className="card-footer">
                    <img src={iconPersons} className="icon-persons" alt="Icon Persons" />
                </div>
                <Select
                    id="Select"
                    title="Nível de Prioridade"
                    className="select-analyse-demand"
                    showOptionsOrder={false}
                    options={options}
                />
                <Select
                    id="Select"
                    title="Equipe Responsável"
                    className="select-analyse-demand"
                    showOptionsOrder={false}
                    options={options}
                />

                <div className="modal-footer">
                    <ButtonGeneral onClick={onClose} className="modal-button modal-button-reject">
                        Recusar
                    </ButtonGeneral>
                    <ButtonGeneral onClick={onClose} className="modal-button modal-button-accept">
                        Aprovar
                    </ButtonGeneral>
                </div>
            </div>
        </div>
    );
};

export default ModalAnalyseDemand;
