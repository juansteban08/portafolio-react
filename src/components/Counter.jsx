import React, { useState } from 'react';
import './Counter.css'; // Importa el CSS

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default Counter;
