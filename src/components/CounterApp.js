import React, { useState } from "react";
import { counterStore } from "../reducers/counterReducer";

export const CounterApp = () => {
  const [count, setCount] = useState(counterStore.getState());

  const listToStore = () => {
    setCount(counterStore.getState());
  };

  counterStore.subscribe(listToStore);

  return (
    <div>
      <div>{count}</div>
      <button onClick={(e) => counterStore.dispatch({ type: "INCREMENT" })}>
        plus
      </button>
      <button onClick={(e) => counterStore.dispatch({ type: "DECREMENT" })}>
        minus
      </button>
      <button onClick={(e) => counterStore.dispatch({ type: "ZERO" })}>
        zero
      </button>
    </div>
  );
};
