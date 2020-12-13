import React from 'react';
import './index.css';

const RecentSearchKeyword = (props) => {
  const { recentSearchVenues, onRecentKeywordClick, shouldCallApi, keyword } = props;
  return recentSearchVenues?.length ? (
    <div className="recent-search-keyword">
      <div className="recent-search-keyword-heading">Recent searched keywords</div>
      <ul>
        {recentSearchVenues.map((recentSearchVenue, recentSearchVenueIndex) => (
          <li
            className={`recent-search-keyword-list-item ${
              !shouldCallApi && keyword === recentSearchVenue.keyword ? 'highlight-row' : ''
            }`}
            data-testid={`recent-search-keyword-list-item${recentSearchVenueIndex}`}
            key={recentSearchVenueIndex}
            onClick={() => onRecentKeywordClick(recentSearchVenueIndex)}
          >
            {recentSearchVenue.keyword}
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default RecentSearchKeyword;
