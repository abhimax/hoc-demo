// Sample component that may throw an error
function ErrorProneComponent({ onError }) {
  // Simulating an error (e.g., calling an undefined function)
  const undefinedFunction = () => {
    try {
      return someVariable.unknownFunction();
    } catch (error) {
      onError(error); // Pass the error to the HOC to handle it
    }
  };

  return <button onClick={undefinedFunction}>Click Me</button>;
}
export default ErrorProneComponent;
