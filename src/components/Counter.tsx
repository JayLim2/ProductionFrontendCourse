import React, {useState} from 'react';
import styles from "./Counter.module.scss";

export const Counter = () => {

    const [count, setCount] = useState(0);

    const onClick = () => {
      setCount(count + 1);
    };

    return (
        <div>
            <b>Counter:</b> {count}
            <button className={styles.button} onClick={onClick}>Increment</button>
        </div>
    );
};