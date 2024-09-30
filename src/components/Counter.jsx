import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const countStorage = localStorage.getItem('count');
    if (countStorage) {
      setCount(parseInt(countStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 10,
      right: 20,
      zIndex: 9999,
    }}>
      <p className='text-primary'>Visited: {count}</p>
    </div>
  );
}

export default Counter;

