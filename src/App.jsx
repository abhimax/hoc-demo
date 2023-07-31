import "./App.css";
import MyComponent from "./assets/MyComponent";
import withClickCounter from "./withClickCounter";

const MyComponentWithClickCounter = withClickCounter(MyComponent);
function App() {
  // const [count, setCount] = useState(0);

  return <MyComponentWithClickCounter />;
}

export default App;
