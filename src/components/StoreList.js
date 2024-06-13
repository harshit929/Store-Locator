// src/components/StoreList.js
import React from 'react';

function StoreList({ stores }) {
  return (
    <div>
      <h2>Store List</h2>
      <ul>
        {stores.map((store) => (
          <li key={store.id}>{store.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default StoreList;
