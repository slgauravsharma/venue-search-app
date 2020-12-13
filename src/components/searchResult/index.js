import React from 'react';
import './index.css';

const SearchResult = (props) => {
  const { venues, error } = props;
  return (
    <div className="search-result">
      <div className="search-result-heading">Geo Locations</div>
      <div className="search-result-header">
        <div>Name</div>
        <div>Longitude</div>
        <div>Latitude</div>
      </div>
      {venues.map((venue) => (
        <div className={`search-result-item-container`} key={venue.id}>
          <div className="search-result-item">{venue?.name}</div>
          <div className="search-result-item">{venue?.location?.longitude}</div>
          <div className="search-result-item">{venue?.location?.latitude}</div>
        </div>
      ))}
      {(error || !venues?.length) && (
        <div className={`search-result-no-data ${error ? 'text-danger' : ''}`}> {error ? error : 'No Data'}</div>
      )}
    </div>
  );
};

export default SearchResult;
