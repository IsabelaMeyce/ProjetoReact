import React, { useState } from 'react';
import styles from './styles.module.css';

const Contador = () => {
  const [count, setCount] = useState(0);

  const incrementa = () => {
    setCount(count + 1);
  };

  const decrementa = () => {
    setCount(count - 1);
  };

  return (
    <div className={styles.header}>
      <h1> Contador</h1>
    <div className={styles.contador}>
      <button onClick={decrementa} className={styles.button}>-</button>
      <div className={styles.count}>{count}</div>
      <button onClick={incrementa} className={styles.button}>+</button>
    </div>
    </div>
  );
};

export default Contador;