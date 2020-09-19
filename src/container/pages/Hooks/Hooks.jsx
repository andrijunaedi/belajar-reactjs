import React, { useState } from 'react';
import './Hooks.css';

const Hooks = () => {
  const [count, setCount] = useState(0);
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
