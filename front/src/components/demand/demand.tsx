import React, { useState } from 'react';
import './demand.css';
import iconPersons from '../../images/icon-persons.png';
import iconClip from '../../images/icon-clip.png';
import iconPlus from '../../images/circle-plus.png';
import ButtonGeneral from '../button/buttonGeneral/buttonGeneral';
import ModalAnalyseDemand from '../modals/modalAnalyseDemand/modalAnalyseDemand';

type CardProps = {
    title: string;
    description: string;
    fileName: string;
};

const Demand: React.FC<CardProps> = ({ title, description, fileName }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAnalisarClick = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="card-container">
            <div className="card-header">
                <p className="card-feature">Feature</p>
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <div className="card-file">
                    <img src={iconClip} className="icon-clip" alt='icon clip'/>
                    <p>{fileName}</p>
                    <img src={iconClip} className="icon-clip" alt='icon clip'/>
                    <p>{fileName}</p>
                    <img src={iconPlus} className="icon-circle" alt='icon plus'/>
                </div>
            </div>
            <div className="card-footer">
                <img src={iconPersons} className="icon-persons" alt='icon persons' />
                <ButtonGeneral onClick={handleAnalisarClick} className={'button-analyse'}>
                    Analisar
                </ButtonGeneral>
            </div>

            {isModalOpen && (
                <ModalAnalyseDemand
                    title={title}
                    description={description}
                    fileName={fileName}
                    options={[
                        { value: 'option1', label: 'Option 1' },
                        { value: 'option2', label: 'Option 2' },
                        { value: 'option3', label: 'Option 3' },
                    ]}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
};

export default Demand;
