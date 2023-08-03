import React, { useState } from "react";

// Higher-Order Component for error handling
function HocErrorHandling(Component) {
  return function WithErrorHandling(props) {
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    // Function to handle errors during rendering
    const handleError = (error) => {
      setHasError(true);
      setErrorMessage(error.message || "An error occurred.");
    };

    // Function to reset the error state
    const resetError = () => {
      setHasError(false);
      setErrorMessage("");
    };

    if (hasError) {
      return (
        <div>
          <h2>Something went wrong:</h2>
          <p>{errorMessage}</p>
          <button onClick={resetError}>Try Again</button>
        </div>
      );
    }

    // Render the original component if no error occurred
    return <Component {...props} onError={handleError} />;
  };
}
export default HocErrorHandling;
