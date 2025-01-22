import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

var UseReducer = () => {
  const [num, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>This is useReducer Example</h1>
      <button onMouseEnter={() => dispatch({ type: "decrement" })}>-</button>
      <h4>The number is {num}</h4>
      <button onKeyDown={() => dispatch({ type: "increment" })}>+</button>
      <button onDoubleClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default UseReducer;
