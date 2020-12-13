// generally api call for we use axios, but without third party library we are using fetch.
const apiClient = (url) => fetch(url).then((res) => res.json());

export default apiClient;
