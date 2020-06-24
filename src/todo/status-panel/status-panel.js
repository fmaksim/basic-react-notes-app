import React from 'react';
import './status-panel.scss';
import PropTypes from 'prop-types';

const StatusPanel = ({todo, done}) => {
    return (
        <div className="status-panel d-flex">
            <h1>Notes list</h1>
            <h2>{todo} is still a to do, {done} already is done.</h2>
        </div>
    );
};

StatusPanel.propTypes = {
    todo: PropTypes.number.isRequired,
    done: PropTypes.number.isRequired,
};

StatusPanel.defaultProps = {
  todo: 0,
  done: 0,
};

export default StatusPanel;