import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import ResultTable from "./components/ResultsTable/ResultsTable";
import "./index.css";
import { calculateInvestmentResults } from "./util/investment";
import { useState } from "react";

function App() {
  const [results, setResults] = useState(null);

  function handleCalculate(userInput) {
    const calculetedResults = calculateInvestmentResults(userInput);
    setResults(calculetedResults);
  }
  return (
    <>
      <Header />
      <UserInput onCalculate={handleCalculate} />
      {results && <ResultTable results={results} />}
    </>
  );
}

export default App;
