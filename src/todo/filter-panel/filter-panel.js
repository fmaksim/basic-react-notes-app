import React, {useContext} from 'react';
import './filter-panel.scss';
import { FirebaseContext } from "../../context/firebase/firebaseContext";
import { FILTER_ALL, FILTER_DONE, FILTER_TODO } from "../../context/firebase/filterTypes";

const FilterPanel = () => {
    const {filter, changeFilter} = useContext(FirebaseContext);

    const filterTypes = {
        [FILTER_ALL]: {
            'text': 'All',
            'active': filter === FILTER_ALL,
        },
        [FILTER_TODO]: {
            'text': 'To Do',
            'active': filter === FILTER_TODO,
        },
        [FILTER_DONE]: {
            'text': 'Done',
            'active': filter === FILTER_DONE,
        },
    };

    const buttons = Object.keys(filterTypes).map((type) => {
        const classes = filterTypes[type].active ? 'btn btn-secondary active' : 'btn btn-secondary';
        return <button
            key={type}
            type="button"
            onClick={() => {
                changeFilter(type);
            }}
            className={ classes }>{ filterTypes[type].text }</button>
    });

    return (
        <div className="btn-group filter-panel" role="group">
            { buttons }
        </div>
    );
};

export default FilterPanel;