import React, { useState, useEffect } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log('Searching for:', e.target.value);
  };

  return (
    <div style={{
      width: '100%',
      backgroundColor: 'black',
      padding: windowWidth <= 480 ? '10px 0' : '20px 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: windowWidth <= 480 ? '0 10px' : '0 20px'
      }}>
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: windowWidth <= 768 ? '100%' : '600px',
          margin: '0 auto'
        }}>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={handleSearch}
            style={{
              width: '100%',
              padding: windowWidth <= 480 ? '8px 16px' : '12px 20px',
              fontSize: windowWidth <= 480 ? '14px' : '16px',
              backgroundColor: '#333',
              color: 'white',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '4px',
              outline: 'none'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
