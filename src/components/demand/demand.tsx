import React, { ReactNode } from 'react';
import './demand.css';
import { FaFileImage, FaSearch } from 'react-icons/fa';
import iconPersons from '../../images/icon-persons.png';
import iconClip from '../../images/icon-clip.png';
import iconPlus from '../../images/circle-plus.png';

type CardProps = {
    title: string;
    description: string;
    fileName: string;
};

const Demand: React.FC<CardProps> = ({ title, description, fileName }) => {
    return (
        <div className="card-container">
            <div className="card-header">
                <p className="card-feature">Feature</p>
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <div className="card-file">
                    <img src={iconClip} className="icon-clip" />
                    <p>{fileName}</p>
                    <img src={iconClip} className="icon-clip" />
                    <p>{fileName}</p>
                    <img src={iconPlus} className="icon-circle" />
                </div>
            </div>
            <div className="card-footer">
                <img src={iconPersons} className="icon-persons" />
                <button className="card-button">
                    <span>Analisar</span>
                </button>
            </div>
        </div>
    );
};

export default Demand;
