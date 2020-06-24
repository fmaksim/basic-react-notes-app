import React, {useContext} from 'react';
import './search-panel.scss';
import { FirebaseContext } from "../../context/firebase/firebaseContext";

const SearchPanel = () => {
    const {findNote} = useContext(FirebaseContext);

    return (
        <div className="search-panel">
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => findNote(e.target.value)}
                    placeholder="Type to search note..."/>
            </div>
        </div>
    );
};

export default SearchPanel;