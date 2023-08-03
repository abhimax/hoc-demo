import { useState } from "react";
import "./App.css";
import HocAuthentication from "./modules/Authentication/HocAuthentication";
import PrivateComponent from "./modules/Authentication/PrivateComponent";
import MyComponent from "./modules/clickCounter/MyComponent";
import withClickCounter from "./modules/clickCounter/withClickCounter";
import HocErrorHandling from "./modules/ErrorHandling/HocErrorHandling";
import ErrorProneComponent from "./modules/ErrorHandling/ErrorProneComponent";

function App() {
  const [isAuth, setAuth] = useState(false);
  function handleAuthentication(key) {
    setAuth(key);
  }
  const MyComponentWithClickCounter = withClickCounter(MyComponent);
  const PrivateComponentWithAuth = HocAuthentication(isAuth, PrivateComponent);
  const ErrorProneComponentWithErrorHandling =
    HocErrorHandling(ErrorProneComponent);
  return (
    <>
      <h1>Higher-Order Component (HOC) Demo</h1>
      <h2>onclick counter</h2>
      <MyComponentWithClickCounter />
      <hr />
      <h2>Authentication</h2>
      <button onClick={() => handleAuthentication("abhiman")}>Log in</button>
      <button onClick={() => handleAuthentication("false")}>Log Out</button>
      <PrivateComponentWithAuth />
      <hr />
      <h2>Error Handling</h2>
      <ErrorProneComponentWithErrorHandling />
    </>
  );
}

export default App;
