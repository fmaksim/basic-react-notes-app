import React from 'react';
import './filter-panel.scss';

const FilterPanel = () => {
    return (
        <div className="btn-group filter-panel" role="group">
            <button type="button" className="btn btn-secondary">All</button>
            <button type="button" className="btn btn-secondary">To Do</button>
            <button type="button" className="btn btn-secondary">Done</button>
        </div>
    );
};

export default FilterPanel;