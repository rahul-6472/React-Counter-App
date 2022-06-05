import { useState } from "react";
import "./Counter.css";
const Counter = ({ counter }) => {
  const [count, setCounter] = useState(counter);

  const increment = () => {
    setCounter(count + 1);
  };

  const decrement = () => {
    setCounter(count - 1);
    if (count === 0) {
      setCounter(0);
    }
  };
  const double = () => {
    setCounter(2 * count);
  };
  return (
    <div>
      <p>
        {" "}
        {count % 2 === 0 ? (
          <h4 style={{ color: "green" }}>{count}</h4>
        ) : (
          <h4 style={{ color: "red" }}>{count}</h4>
        )}
      </p>

      <button style={{ background: "green" }} onClick={increment}>
        Increment
      </button>
      <button style={{ background: "Red" }} onClick={decrement}>
        Decrement
      </button>
      <button style={{ background: "orangered" }} onClick={double}>
        Double
      </button>
    </div>
  );
};

export default Counter;
