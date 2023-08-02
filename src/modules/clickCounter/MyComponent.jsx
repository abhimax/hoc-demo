// MyComponent.js
import React from "react";

const MyComponent = ({ clickCounter, onClick }) => {
  return (
    <div>
      <h3>Click Counter: {clickCounter}</h3>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

export default MyComponent;
