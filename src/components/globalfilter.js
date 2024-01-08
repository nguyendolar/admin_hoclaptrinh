import React from 'react';

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div style={{ position: 'absolute', top: '-76px', right: '0px', padding: '5px',margin: '5px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '5px', border: '1px solid #ddd' }}>
      <input
        value={filter || ''}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search..."
        style={{ width: '250px', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }}
      />
    </div>
  );
};
