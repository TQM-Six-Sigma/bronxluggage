import React, { useState, useEffect } from 'react';
import '../css/Ticker.css';
import Location from './Location';
function Ticker() {
  const [date, setDate] = useState(new Date());
  /* const [location, setLocation] = useState('TP Hồ Chí Minh'); */ // Ví dụ, bạn có thể thay thế bằng vị trí hiện tại

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000); // Cập nhật mỗi 1 giây
    return () => clearInterval(intervalId);
  }, []);

  const handleAnimateTicker = () => {
    const ticker = document.querySelector('.ticker');
    ticker.style.transform = 'translateX(-100%)';
    setTimeout(() => {
      ticker.style.transform = 'translateX(0)';
    }, 5000); // Thời gian cuộn
  };

  useEffect(() => {
    handleAnimateTicker();
    const intervalId = setInterval(handleAnimateTicker, 5000); // Cuộn liên tục
    return () => clearInterval(intervalId);
  }, []);

  

  return (
    <div className="ticker bg-secondary ">
      <span>{date.toLocaleDateString()}</span>
      <span>{date.toLocaleTimeString()}</span>
      <span><Location /></span>
    </div>
  );
}

export default Ticker;