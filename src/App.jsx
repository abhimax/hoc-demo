import "./App.css";
import MyComponent from "./modules/clickCounter/MyComponent";
import withClickCounter from "./modules/clickCounter/withClickCounter";

const MyComponentWithClickCounter = withClickCounter(MyComponent);
function App() {
  return (
    <>
      <h1>HOC Demo</h1>
      <h2>onclick counter</h2>
      <MyComponentWithClickCounter />
    </>
  );
}

export default App;
