// withClickCounter.js
import React, { useState } from "react";

const withClickCounter = (WrappedComponent) => {
  const WithClickCounter = (props) => {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
      setClickCount((prevCount) => prevCount + 1);
    };

    return (
      <WrappedComponent
        clickCounter={clickCount}
        onClick={handleClick}
        {...props}
      />
    );
  };

  return WithClickCounter;
};

export default withClickCounter;
