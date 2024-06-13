// src/components/StoreDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StoreDetails({ match }) {
  const [store, setStore] = useState(null);

  useEffect(() => {
    const fetchStore = async () => {
      const response = await axios.get(`https://AIzaSyD0wv0BFa6vgrKIOBGzxNujr3X2AnSpC_Y/stores/${match.params.id}`); // Replace with your API endpoint
      setStore(response.data);
    };

    fetchStore();
  }, [match.params.id]);

  if (!store) return <div>Loading...</div>;

  return (
    <div>
      <h1>{store.name}</h1>
      <p>{store.description}</p>
      <p>{store.address}</p>
      <p>{store.phone}</p>
    </div>
  );
}

export default StoreDetails;
