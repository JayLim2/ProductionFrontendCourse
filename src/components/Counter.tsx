import React, {useState} from 'react';
import "./Counter.scss";

export const Counter = () => {

    const [count, setCount] = useState(0);

    const onClick = () => {
      setCount(count + 1);
    };

    return (
        <div>
            <b>Counter:</b> {count}
            <button onClick={onClick}>Increment</button>
        </div>
    );
};