import { useState, useEffect } from "react";
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
const log = console.log;

const App = () => {
  const [display, setDisplay] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resetOp, setResetOp] = useState(false);
  const [isOp, setIsOp] = useState(false);
  const [whichOperator, setwhichOperator] = useState("");

  useEffect(() => {
    setIsOp(false);
  }, [resetOp]);

  const opOnOrOff = () => {
    setNum1("");
    setDisplay("");
    setIsOp(true);
  };

  const double = {
    onClick: function (op) {
      opOnOrOff();
      operator(op);
    },
  };

  const operator = (op) => {
    setwhichOperator(op);
  };

  const equal = (num1, num2, operator) => {
    let operation = new Mycalculator(num1, operator, num2);
    let res = operation.whichCalc();
    setDisplay(res);
    setResetOp(false);
    setNum1("");
    setNum2("");
    setIsOp(false);
  };

  const addNumber = (num) => {
    if (num1 === "" && isOp === false) {
      log("scope 1");
      setDisplay("" + display + num);
      setNum1("" + num1 + num);
    } else if (num1 !== "" && isOp === false) {
      log("scope 2");
      setDisplay("" + display + num);
      setNum1("" + num1 + num);
    } else if (num2 === "" && isOp === true) {
      log("scope 3");
      setDisplay("" + display + num);
      setNum2("" + num1 + num);
    } else if (num2 !== "" && isOp === true) {
      log("scope 4");
      setDisplay("" + display + num);
      setNum2("" + num1 + num);
    }
  };

  return (
    <div className="container">
      <Title />
      <div className="calculator">
        <Display display={display} />
        <div className="underDisplay">
          <div className="first line">
            <Clear />
            <PositiveOrNegative />
            <Modulus />
            <Operator
              operator="/"
              cssClass="division"
              usedOperator={opOnOrOff}
              opfunc={operator}
              double={double}
            />
          </div>
          <div className="second line">
            <Number number="7" col_span="1" addNumber={addNumber} />
            <Number number="8" col_span="1" addNumber={addNumber} />
            <Number number="9" col_span="1" addNumber={addNumber} />
            <Operator
              operator="*"
              cssClass="multiplication"
              usedOperator={opOnOrOff}
              opfunc={operator}
              double={double}
            />
          </div>
          <div className="Third line">
            <Number number="4" col_span="1" addNumber={addNumber} />
            <Number number="5" col_span="1" addNumber={addNumber} />
            <Number number="6" col_span="1" addNumber={addNumber} />
            <Operator
              operator="-"
              cssClass="subtraction"
              usedOperator={opOnOrOff}
              opfunc={operator}
              double={double}
            />
          </div>
          <div className="Fourth line">
            <Number number="1" col_span="1" addNumber={addNumber} />
            <Number number="2" col_span="1" addNumber={addNumber} />
            <Number number="3" col_span="1" addNumber={addNumber} />
            <Operator
              operator="+"
              cssClass="addition"
              usedOperator={opOnOrOff}
              opfunc={operator}
              double={double}
            />
          </div>
          <div className="Fifth line">
            <Number number="0" col_span="2" addNumber={addNumber} />
            <Comma />
            <Equal
              num1={num1}
              num2={num2}
              whichOperator={whichOperator}
              equal={equal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
