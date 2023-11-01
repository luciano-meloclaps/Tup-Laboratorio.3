import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ButtonRandom from "./components/button/Button";
import Tables from "./components/table/Tables";
import Login from "./components/login/Login";

function App() {
  const [setIncButton] = useState(0);

  const netIncomes = [
    { brand: `McDonalds`, income: 1291283 },
    { brand: `Burger King`, income: 1927361 },
    { brand: `KFC`, income: 1098463 },
  ];

  const calculateAvgNetIncomes = (incomes) => {
    const initialValue = 0;
    return (
      incomes.reduce(
        (acc, currentValue) => acc + currentValue.income,
        initialValue
      ) / incomes.length
    );
  };

  const avgNetIncomes = calculateAvgNetIncomes(netIncomes);

  return (
    <>
      <Tables netIncomes={netIncomes} avgNetIncomes={avgNetIncomes} />
      <ButtonRandom {...setIncButton} />
      <Login />
    </>
  );
}

export default App;
