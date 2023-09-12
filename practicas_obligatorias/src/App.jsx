import "bootstrap/dist/css/bootstrap.min.css";
import ButtonRandom from "./components/Button/Button";
import "./App.css";
import Tables from "./components/table/Tables";
import { useState } from "react";

function App() {
  const [setIncButton] = useState(0);

  const netIncomes = [
    { brand: `McDonalds`, income: 1291283 },
    { brand: `Burger King`, income: 1927361 },
    { brand: `KFC`, income: 1098463 },
  ];

  const initialValue = 0;
  const avgNetIncomes =
    netIncomes.reduce(
      (acc, currentValue) => acc + currentValue.income,
      initialValue
    ) / netIncomes.length;
  console.log(avgNetIncomes);

  return (
    <>
      <Tables netIncomes={netIncomes} avgNetIncomes={avgNetIncomes} />
      <ButtonRandom {...setIncButton} />
    </>
  );
}

export default App;
