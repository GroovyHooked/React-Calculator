import { useState } from "react";
import "./App.scss";

import Mycalculator from "./logic.js";
import Title from "./title";
import Number from "./components/numbers/Number.js";
import Operator from "./components/operators/Operator";

import Equal from "./components/operators/equal.js";

import Display from "./display.js";
import Clear from "./components/various/clear.js";
import Modulus from "./components/various/modulus.js";
import PositiveOrNegative from "./components/various/positiveOrNegative.js";
import Comma from "./components/various/comma.js";

function App() {
  const [display, setDisplay] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  //const result = document.querySelector(".result");

  let entryAfterOperator = false;

  const addNumber = (num) => {
    setDisplay("" + display + num);
    // let foo = num;
    // if (Number(num1) && entryAfterOperator === false) {
    //   console.log("num1", num1);
    //   foo = num;
    //   setNum1(foo);
    //   setDisplay(foo);
    // } else if (Number(num2) && entryAfterOperator === true) {
    //   console.log("num2", num2);
    //   foo += num;
    //   setNum2(foo);
    //   setDisplay(foo);
    //}
  };

  return (
    <div className="container">
      <Title />
      <table>
        <Display display={display} />
        <tbody>
          <tr>
            <Clear />
            <PositiveOrNegative />
            <Modulus />
            <Operator operator="/" cssClass="division" />
          </tr>
          <tr>
            <Number number="7" col_span="1" addNumber={addNumber} />
            <Number number="8" col_span="1" addNumber={addNumber} />
            <Number number="9" col_span="1" addNumber={addNumber} />
            <Operator operator="*" cssClass="multiplication" />
          </tr>
          <tr>
            <Number number="4" col_span="1" addNumber={addNumber} />
            <Number number="5" col_span="1" addNumber={addNumber} />
            <Number number="6" col_span="1" addNumber={addNumber} />
            <Operator operator="-" cssClass="subtraction" />
          </tr>
          <tr>
            <Number number="1" col_span="1" addNumber={addNumber} />
            <Number number="2" col_span="1" addNumber={addNumber} />
            <Number number="3" col_span="1" addNumber={addNumber} />
            <Operator operator="+" cssClass="addition" />
          </tr>
          <tr>
            <Number number="0" col_span="2" addNumber={addNumber} />
            <Comma />
            <Equal />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
