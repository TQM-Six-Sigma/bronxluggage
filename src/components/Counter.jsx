import React, { useState, useEffect } from "react";
import { LuUser2 } from "react-icons/lu";

function Counter() {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem("count");
    return storedCount !== null ? parseInt(storedCount, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      setCount(count+1);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [count]);

  return (
    <div
      style={{
        position: "absolute",
        top: 10,
        right: 20,
        zIndex: 9999,
      }}
    >
      <span
        className="text-primary"
        style={{ fontSize: "22px", display: "flex", alignItems: "center" }}
      >
        Visited: {count}
        <LuUser2 style={{ fontSize: "20px", marginLeft: "5px" }} />
      </span>
    </div>
  );
}

export default Counter;
