// MyComponent.js
import React from "react";

const MyComponent = ({ clickCounter, onClick }) => {
  return (
    <div>
      <h2>Click Counter: {clickCounter}</h2>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

export default MyComponent;
