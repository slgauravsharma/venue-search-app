import apiClient from '../utils/apiClient';
import endpoints from '../utils/endpoints';

export const fetchVenuesApi = (keyword) => apiClient(endpoints.venueSearch(keyword));
