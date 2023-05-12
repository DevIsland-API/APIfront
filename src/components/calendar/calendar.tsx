import React from 'react';
import iconCalendar from '../../images/icon-calendar.png';

import './calendar.css'

const Calendar: React.FC = () => {
    const currentDate = new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' });

    return (
        <div className="user-info">
            <img src="https://picsum.photos/60" alt="Profile" className="profile-pic" />
            <div className="user-details">
                <div>
                <p className="user-name" style={{ fontWeight: '600', fontSize: '16px', color: '#242A2E' }}>John Doe</p>
                <p className="user-office" style={{ fontWeight: '600', fontSize: '12px', color: '#697677' }}>CEO</p>
                </div>
                <div className="divider" style={{ height: '40px', borderLeft: '1px solid #ccc' }}></div>
                <div className="current-date">
                    <img src={iconCalendar} alt="Calendar" />
                    <p>{currentDate}</p>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
