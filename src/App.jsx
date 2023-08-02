import "./App.css";
import HocAuthentication from "./modules/Authentication/HocAuthentication";
import PrivateComponent from "./modules/Authentication/PrivateComponent";
import MyComponent from "./modules/clickCounter/MyComponent";
import withClickCounter from "./modules/clickCounter/withClickCounter";

const MyComponentWithClickCounter = withClickCounter(MyComponent);
const PrivateComponentWithAuth = HocAuthentication(PrivateComponent);
function App() {
  return (
    <>
      <h1>Higher-Order Component (HOC) Demo</h1>
      <h2>onclick counter</h2>
      <MyComponentWithClickCounter />
      <hr />
      <h2>Authentication</h2>
      <PrivateComponentWithAuth />
    </>
  );
}

export default App;
