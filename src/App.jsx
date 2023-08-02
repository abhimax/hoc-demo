import "./App.css";
import MyComponent from "./modules/clickCounter/MyComponent";
import withClickCounter from "./modules/clickCounter/withClickCounter";

const MyComponentWithClickCounter = withClickCounter(MyComponent);
function App() {
  return <MyComponentWithClickCounter />;
}

export default App;
