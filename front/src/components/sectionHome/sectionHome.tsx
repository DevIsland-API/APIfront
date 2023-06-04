import React from 'react';

type Item = {
    id: number;
    name: string;
    image: string;
    dotsImage: string;
};

type Props = {
    title: string;
    count: number;
    items: Item[];
};

const DashboardSection: React.FC<Props> = ({ title, count, items }) => {
    return (
        <div className="dashboard-section">
            <div className="count-modal">
                <h2>{title}</h2>
                <p className="count">{count}</p>
            </div>
            <ul>
                {items.map((item) => (
                    <li key={item.id} className="option">
                        <img src={item.dotsImage} alt="" />
                        <span>{item.name}</span>
                        <img src={item.image} alt="" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DashboardSection;
