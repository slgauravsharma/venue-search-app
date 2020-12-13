const prefix = 'https://app.ticketmaster.com/discovery/v2/';
const apiKey = 'xD8zOeueZIycT8uMePpsoXmBPya2lyZX';

const endpoints = {
  // venue search api
  venueSearch: (keyword) => `${prefix}/venues.json?keyword=${keyword}&apikey=${apiKey}`,
};

export default endpoints;
