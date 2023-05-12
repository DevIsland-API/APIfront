import React, { useState } from 'react';
import './home.css';
import dots from '../../images/mdi_dots-vertical.png';
import option from '../../images/iconoir_mac-option-key.png';
import iconMessage from '../../images/icon-message.png';
import iconAccount from '../../images/icon-account.png';
import iconAccountMultiple from '../../images/icon-account-multiple-plus.png';
import iconFileUpload from '../../images/icon-file-upload.png';
import { Link } from 'react-router-dom';
import DashboardSection from '../sectionHome/sectionHome';
import Calendar from '../calendar/calendar';
import ButtonHeader from '../button/buttonHeader/buttonHeader';
import ModalNewUser from '../modals/modalNewUser/modalNewUser';
import ModalNewGroup from '../modals/modalNewGroup/modalNewGroup';

interface User {
    id: number;
    name: string;
    email: string;
    image: string;
    dotsImage: string;
}

interface Item {
    id: number;
    name: string;
    image: string;
    dotsImage: string;
}

interface Analysis extends Item {
    status: string;
}

interface Approval extends Item {
    priority: number;
}

interface DashboardProps {
    users: User[];
    analyses: Analysis[];
    approvals: Approval[];
}

const Dashboard: React.FC<DashboardProps> = ({ users, analyses, approvals }) => {
    const [isGrupoModalOpen, setGrupoModalOpen] = useState(false);
    const [isUsuarioModalOpen, setUsuarioModalOpen] = useState(false);

    const openGrupoModal = () => {
        setGrupoModalOpen(true);
    };

    const closeGrupoModal = () => {
        setGrupoModalOpen(false);
    };

    const openUsuarioModal = () => {
        setUsuarioModalOpen(true);
    };

    const closeUsuarioModal = () => {
        setUsuarioModalOpen(false);
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <Calendar />
                <div className="header-buttons">
                    <Link to="/chamados/novo" style={{ textDecoration: 'none' }}>
                        <ButtonHeader
                            text="Nova Demanda"
                            iconSrc={iconFileUpload}
                            altText="File Upload"
                            specificity="new-demand-btn"
                        />
                    </Link>

                    <ButtonHeader
                        text="Novo Grupo"
                        iconSrc={iconAccountMultiple}
                        altText="Account Multiple"
                        specificity="new-group-btn"
                        onClick={openGrupoModal}
                    />

                    <ButtonHeader
                        text="Novo Usuário"
                        iconSrc={iconAccount}
                        altText="Account"
                        specificity="new-user-btn"
                        onClick={openUsuarioModal}
                    />

                    <ModalNewUser
                        isOpen={isUsuarioModalOpen}
                        onClose={closeUsuarioModal}
                        title="Modal Title"
                        description="Modal Description"
                    />

                    <ModalNewGroup
                        isOpen={isGrupoModalOpen}
                        onClose={closeGrupoModal}
                    />
                </div>
            </div>

            <div className="dashboard-container">
                <DashboardSection title="Análises Pendentes" count={analyses.length} items={analyses} />
                <DashboardSection title="Aguardando Aprovação" count={approvals.length} items={approvals} />
                <DashboardSection title="Usuários" count={users.length} items={users} />
            </div>

        </div>
    );
};

// Simulações de dados
const users: User[] = [
    { id: 1, name: 'Pedro Santos', email: 'john@example.com', image: iconMessage, dotsImage: 'https://picsum.photos/50' },
    { id: 2, name: 'Mariana Silva', email: 'jane@example.com', image: iconMessage, dotsImage: 'https://picsum.photos/50' },
    { id: 3, name: 'Carolina Cristina', email: 'bob@example.com', image: iconMessage, dotsImage: 'https://picsum.photos/50' },
    { id: 4, name: 'Paulo Pererira', email: 'john@example.com', image: iconMessage, dotsImage: 'https://picsum.photos/50' },
    { id: 5, name: 'Danilo Ferreira', email: 'jane@example.com', image: iconMessage, dotsImage: 'https://picsum.photos/50' },
    { id: 6, name: 'Maria Castro', email: 'bob@example.com', image: iconMessage, dotsImage: 'https://picsum.photos/50' },
];

const analyses: Analysis[] = [
    { id: 1, name: 'Análise 1', status: 'completed', image: dots, dotsImage: option },
    { id: 2, name: 'Análise 2', status: 'pending', image: dots, dotsImage: option },
    { id: 3, name: 'Análise 3', status: 'pending', image: dots, dotsImage: option },
    { id: 4, name: 'Análise 4', status: 'completed', image: dots, dotsImage: option },
    { id: 5, name: 'Análise 5', status: 'pending', image: dots, dotsImage: option },
    { id: 6, name: 'Análise 6', status: 'pending', image: dots, dotsImage: option },
    { id: 7, name: 'Análise 7', status: 'completed', image: dots, dotsImage: option },
    { id: 8, name: 'Análise 8', status: 'pending', image: dots, dotsImage: option },
    { id: 9, name: 'Análise 9', status: 'pending', image: dots, dotsImage: option },
];

const approvals: Approval[] = [
    { id: 1, name: 'Solicitação 1', priority: 1, image: dots, dotsImage: option },
    { id: 2, name: 'Solicitação 2', priority: 2, image: dots, dotsImage: option },
    { id: 3, name: 'Solicitação 3', priority: 3, image: dots, dotsImage: option },
    { id: 4, name: 'Solicitação 4', priority: 1, image: dots, dotsImage: option },
    { id: 5, name: 'Solicitação 5', priority: 2, image: dots, dotsImage: option },
    { id: 6, name: 'Solicitação 6', priority: 3, image: dots, dotsImage: option },
    { id: 7, name: 'Solicitação 7', priority: 1, image: dots, dotsImage: option },
    { id: 8, name: 'Solicitação 8', priority: 2, image: dots, dotsImage: option },
];


const App: React.FC = () => {
    return (
        <div className="App">
            <Dashboard users={users} analyses={analyses} approvals={approvals} />
        </div>
    );
};

export default App;
