import logo from "./logo.svg";
import "./App.css";
import Keyboard from "./components/Keyboard";
import TextBox from "./components/TextBox";

function App() {
  return (
    <div className="bg-gray-700">
      <div className="bg-gray-700 text-center">
        <TextBox className="bg-gray-700" />
      </div>
    </div>
  );
}

export default App;
