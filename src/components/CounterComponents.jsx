import React from "react";
import useCounter from "./ItemCounter";

const CounterComponents = () => {
  const { count, increment, decrement } = useCounter(0, 1);

  return (
    <>
      <div>Counter:{count}</div>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default CounterComponents;
