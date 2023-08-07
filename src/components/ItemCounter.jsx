import { useState } from "react";

const ItemCounter = (initialValue = 0, step = 1) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prevCount) => prevCount + step);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - step);
  };

  return {
    count,
    increment,
    decrement,
  };
};

export default ItemCounter;
