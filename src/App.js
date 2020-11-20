import "./App.css";
import "./components/CalculatorButton";
import { CalculatorButton } from "./components/CalculatorButton";

const generateCalculator = () => {
  let fullCalculator = [];
  for (let i = 1; i < 10; i++) {
    fullCalculator.push(<CalculatorButton value={i} />);
    switch (i) {
      case 3:
        fullCalculator.push(<CalculatorButton value="-" class="primary" />);
        break;
      case 6:
        fullCalculator.push(<CalculatorButton value="*" class="primary" />);
        break;
      case 9:
        fullCalculator.push(<CalculatorButton value="/" class="primary" />);
        break;
    }
  }
  return fullCalculator;
};

function App() {
  return (
    <div className="App">
      <p>
        <code>React Calculator</code>
      </p>
      <div className="Calculator">
        <CalculatorButton value={0} />
        <CalculatorButton value="." class="large" />
        <CalculatorButton value="+" class="primary" />

        {generateCalculator()}
      </div>
    </div>
  );
}

export default App;
