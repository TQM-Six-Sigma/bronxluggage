import React, { useState, useEffect } from 'react';
import { LuUser2 } from "react-icons/lu";

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
      position: 'absolute',
      top: 10,
      right: 20,
      zIndex: 9999,
    }}>
      <span className='text-primary'>Visited: {count}<LuUser2 style={{fontSize: "20px"}} /></span>
    </div>
  );
}

export default Counter;

