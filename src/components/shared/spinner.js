import React from 'react';

const Spinner = ({ show }) => {
  return show ? (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  ) : null;
};

export default Spinner;
