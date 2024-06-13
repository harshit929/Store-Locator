// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StoreList from './components/StoreList';
import Map from './components/Map';

function App() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      const response = await axios.get('https://AIzaSyD0wv0BFa6vgrKIOBGzxNujr3X2AnSpC_Y/stores'); // Replace with your API endpoint
      setStores(response.data);
    };

    fetchStores();
  }, []);

  return (
    <div className="App">
      <h1>Store Finder</h1>
      <StoreList stores={stores} />
      <Map stores={stores} />
    </div>
  );
}

export default App;
