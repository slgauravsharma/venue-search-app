import React from 'react';
import './index.css';

const SearchBox = (props) => {
  const { label, ...rest } = props;
  return (
    <div className="search-box">
      <label id="search-box" className="search-box-label">
        {label}
      </label>
      <input {...rest} className="search-box-input" type="text" aria-labelledby="search-box" />
    </div>
  );
};

export default SearchBox;
