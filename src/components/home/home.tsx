import React from 'react';
import './home.css';
import dots from '../../images/mdi_dots-vertical.png'
import option from '../../images/iconoir_mac-option-key.png'
import iconMessage from '../../images/icon-message.png'
import iconAccount from '../../images/icon-account.png'
import iconAccountMultiple from '../../images/icon-account-multiple-plus.png'
import iconFileUpload from '../../images/icon-file-upload.png'
import iconCalendar from '../../images/icon-calendar.png'
import { Link } from 'react-router-dom';


type User = {
    id: number;
    name: string;
    email: string;
};

type Analysis = {
    id: number;
    name: string;
    status: string;
};

type Approval = {
    id: number;
    name: string;
    priority: number;
};

type Props = {
    users: User[];
    analyses: Analysis[];
    approvals: Approval[];
};

const Dashboard: React.FC<Props> = ({ users, analyses, approvals }) => {
    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <div className="user-info">
                    <img src="https://picsum.photos/50" alt="Profile" className="profile-pic" />
                    <div className="user-details">
                        <p className="user-name">John Doe</p>
                        <div className="current-date" >
                            <img src={iconCalendar}></img>
                            <p>24 Abr</p>
                        </div>
                    </div>
                </div>
                <div className="header-buttons">
                    <Link to='/chamados/novo' style={{ textDecoration: 'none' }}><button className="btn-primary new-demand-btn">
                        <img className='icon-button' src={iconFileUpload}></img>
                        Nova Demanda
                    </button></Link>

                    <button className="btn-primary new-group-btn">
                        <img className='icon-button' src={iconAccountMultiple}></img>
                        Novo Grupo
                    </button>

                    <button className="btn-primary new-user-btn">
                        <img className='icon-button' src={iconAccount}></img>
                        Novo Usuário
                    </button>
                </div>
            </div>
            <div className="dashboard-container">
                <div className="dashboard-section">
                    <div className='count-modal'>
                        <h2>Análises Pendentes</h2>
                        <p className="count">{analyses.length}</p>
                    </div>
                    <ul>
                        {analyses.map((analysis) => (
                            <li key={analysis.id} className="option">
                                <img src={option}></img>
                                <span>{analysis.name}</span>
                                <img src={dots}></img>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="dashboard-section">
                    <div className='count-modal'>
                        <h2>Aguardando Aprovação</h2>
                        <p className="count">{approvals.length}</p>
                    </div>
                    <ul>
                        {approvals.map((approval) => (
                            <li key={approval.id} className="option">
                                <img src={option}></img>
                                <span>{approval.name}</span>
                                <img src={dots}></img>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="dashboard-section">
                    <div className='count-modal'>
                        <h2>Usuários</h2>
                        <p className="count">{users.length}</p>
                    </div>
                    <ul>
                        {users.map((user) => (
                            <li key={user.id} className="option">
                                <img src={`https://picsum.photos/50`} className="user-image" />
                                <span>{user.name}</span>
                                <img className='icon-message' src={iconMessage}></img>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
// Simulações de dados
const users = [
    { id: 1, name: 'Pedro Santos', email: 'john@example.com' },
    { id: 2, name: 'Mariana Silva', email: 'jane@example.com' },
    { id: 3, name: 'Carolina Cristina', email: 'bob@example.com' },
    { id: 4, name: 'Paulo Pererira', email: 'john@example.com' },
    { id: 5, name: 'Danilo Ferreira', email: 'jane@example.com' },
    { id: 6, name: 'Maria Castro', email: 'bob@example.com' },
];

const analyses = [
    { id: 1, name: 'Análise 1', status: 'completed' },
    { id: 2, name: 'Análise 2', status: 'pending' },
    { id: 3, name: 'Análise 3', status: 'pending' },
    { id: 4, name: 'Análise 4', status: 'completed' },
    { id: 5, name: 'Análise 5', status: 'pending' },
    { id: 6, name: 'Análise 6', status: 'pending' },
    { id: 7, name: 'Análise 7', status: 'completed' },
    { id: 8, name: 'Análise 8', status: 'pending' },
    { id: 9, name: 'Análise 9', status: 'pending' },
];

const approvals = [
    { id: 1, name: 'Solicitação 1', priority: 1 },
    { id: 2, name: 'Solicitação 2', priority: 2 },
    { id: 3, name: 'Solicitação 3', priority: 3 },
    { id: 4, name: 'Solicitação 4', priority: 1 },
    { id: 5, name: 'Solicitação 5', priority: 2 },
    { id: 6, name: 'Solicitação 6', priority: 3 },
    { id: 7, name: 'Solicitação 7', priority: 1 },
    { id: 8, name: 'Solicitação 8', priority: 2 },
];

const App: React.FC = () => {
    return (
        <div className="App">
            <Dashboard users={users} analyses={analyses} approvals={approvals} />
        </div>
    );
};

export default App;
