import React from 'react';
import './status-panel.scss';

const StatusPanel = ({todo, done}) => {
    return (
        <div className="status-panel d-flex">
            <h1>Notes list</h1>
            <h2>{todo} is still a to do, {done} already is done.</h2>
        </div>
    );
};

export default StatusPanel;