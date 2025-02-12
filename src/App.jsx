import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import ResultTable from "./components/ResultsTable/ResultsTable";
import "./index.css";
import { calculateInvestmentResults } from "./util/investment";
import { useState } from "react";

function App() {
  return (
    <>
      <Header />
      <UserInput />
      <ResultTable />
    </>
  );
}

export default App;
