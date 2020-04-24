import { useState, useEffect } from 'react';

import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [load, setLoad] = useState(true);

  const searchApi = async (term) => {
    try {
      setLoad(true);

      const response = await yelp.get('/search', {
        params: {
          term,
          limit: 50,
          location: 'Brazil'
        }
      });

      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage('Something went wrong')
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    searchApi();
  }, []);

  return [results, errorMessage, load, searchApi];
};