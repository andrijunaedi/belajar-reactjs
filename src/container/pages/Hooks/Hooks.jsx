import React, { useEffect, useState } from 'react';
import './Hooks.css';

const Hooks = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Title Change ${count}`;
    return () => {
      document.title = 'React App';
    };
  });

  return (
    <div className="p-hooks">
      <p>Nilai saat ini adalah : {count}</p>
      <button type="submit" onClick={() => setCount(count + 1)}>
        Update Nilai
      </button>
    </div>
  );
};

export default Hooks;
