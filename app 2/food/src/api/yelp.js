import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer 6Tw4WPOFG07RNCyGlXfeqDDJb1XBjXMmV5QvLtT1LgQAhKTRl4CkGyAc1wAc9lJax0ZO-6hRwvRQTdeYI-hgo9Hs4S1mJzS7Px9T181VfkXi5zxD0HeKiDaIVXV1XnYx'
  }
});