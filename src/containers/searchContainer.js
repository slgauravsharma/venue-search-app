import React, { useState, useCallback } from 'react';
import Spinner from '../components/shared/spinner';
import SearchBox from '../components/searchBox';
import useDebounce from '../utils/useDebounce';
import { fetchVenuesApi } from '../services/searchService';
import SearchResult from '../components/searchResult';
import RecentSearchKeyword from '../components/recentSearchResult';

const SearchContainer = () => {
  const [state, setState] = useState({
    keyword: '',
    venues: [],
    recentSearchVenues: [],
    isLoading: false,
    error: null,
    shouldCallApi: false,
  });
  const { keyword, venues, isLoading, shouldCallApi, error, recentSearchVenues } = state;

  const updateState = useCallback(
    (newState) => {
      setState({ ...state, ...newState });
    },
    [state],
  );

  const onSeachBoxChange = useCallback(
    (e) => updateState({ keyword: e.target.value, shouldCallApi: true, error: null }),
    [updateState],
  );

  useDebounce(
    () => {
      if (keyword && shouldCallApi) {
        updateState({ isLoading: true });
        fetchVenuesApi(keyword)
          .then((res) => {
            const recentSearchVenuesCopy = recentSearchVenues.slice();
            const venues = res?._embedded?.venues || [];
            if (recentSearchVenuesCopy.length === 5) {
              recentSearchVenuesCopy.shift();
              recentSearchVenuesCopy.push({ keyword, venues });
            } else {
              recentSearchVenuesCopy.push({ keyword, venues });
            }
            updateState({ venues: venues || [], isLoading: false, recentSearchVenues: recentSearchVenuesCopy });
          })
          .catch((err) => updateState({ error: err.message, isLoading: false }));
      }
    },
    700,
    [keyword],
  );

  const onRecentKeywordClick = (selectedDataIndex) => {
    updateState({
      keyword: recentSearchVenues[selectedDataIndex].keyword,
      shouldCallApi: false,
      venues: recentSearchVenues[selectedDataIndex].venues,
    });
  };

  return (
    <div>
      <div className="search-header">Venue search</div>
      <Spinner show={isLoading} />
      <SearchBox
        data-testid="search-input"
        onChange={onSeachBoxChange}
        value={keyword}
        placeholder="enter keyword"
        label="Venue search:"
      />
      <div className="d-flex">
        <SearchResult data-testid="search-result" venues={venues} error={error} />
        <RecentSearchKeyword
          recentSearchVenues={recentSearchVenues}
          onRecentKeywordClick={onRecentKeywordClick}
          keyword={keyword}
          shouldCallApi={shouldCallApi}
        />
      </div>
    </div>
  );
};

export default SearchContainer;
