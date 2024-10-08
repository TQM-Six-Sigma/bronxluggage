import React, { useState, useEffect } from 'react';
import { LuUser2 } from "react-icons/lu";
import { useLocation } from 'react-router-dom';

function Counter() {
  const [count, setCount] = useState(0);
  const location = useLocation();

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
    const handleBeforeUnload = () => {
      setCount((prevCount) => prevCount + 1);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  useEffect(() => {
    setCount((prevCount) => prevCount + 1);
  }, [location.pathname]);

  return (
    <div style={{
      position: 'absolute',
      top: 10,
      right: 20,
      zIndex: 9999,
    }}>
      <span className='text-primary' style={{fontSize: "22px", display: "flex", alignItems: "center"}}>Visited: {count}<LuUser2  style={{fontSize: "20px", marginLeft: "5px"}} /></span>
    </div>
  );
}

export default Counter;