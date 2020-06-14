import React from 'react';
import './search-panel.scss';

const SearchPanel = () => {
    return (
        <div className="search-panel">
            <form onSubmit={ () => {
            } }>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Type to search note..."/>
                </div>
            </form>
        </div>
    );
};

export default SearchPanel;