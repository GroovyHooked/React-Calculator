import { useState, useEffect } from "react";
import "./App.scss";

import Mycalculator from "./components/various/logic";
import Title from "./components/various/title";

import { Firstline } from "./components/lines/firstline";
//import { SecondToFourth } from "./components/lines/secondtofourth";

import Number from "./components/Number";
import Operator from "./components/Operator";

import Equal from "./components/various/equal";

import Display from "./components/various/display";

import Comma from "./components/various/comma";
import Log from "./components/various/log";
const log = console.log;

const App = () => {
  const [display, setDisplay] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [numberOnHold, setnumberOnHold] = useState("");
  const [resetOp, setResetOp] = useState(false);
  const [isOp, setIsOp] = useState(false);
  const [whichOperator, setwhichOperator] = useState("");
  const [memory, setMemory] = useState([]);
  const [bol, setBol] = useState(false);

  const clear = () => {
    if (!bol) {
      setDisplay("");
      setNum1("");
      setNum2("");
      setResetOp(false);
      setwhichOperator("");
      setBol(true);
    } else {
      setDisplay("");
      setNum1("");
      setNum2("");
      setResetOp(false);
      setwhichOperator("");
      setMemory([]);
      setBol(false);
    }
  };

  useEffect(() => {
    setIsOp(false);
  }, [resetOp]);

  const opOnOrOff = () => {
    setnumberOnHold(num1);
    setNum1("");
    setIsOp(true);
  };

  const operator = (op) => {
    setwhichOperator(op);
    setDisplay(display + op);
  };

  const doubleFunc = {
    onClick: (op) => {
      opOnOrOff();
      operator(op);
    },
  };

  const comma = () => {
    if (display === "") return;
    log(display.search(/\./));
    if (display.search(/\./) !== -1) {
      return;
    } else {
      setDisplay(display + ".");
      whichOperator !== "" ? setNum2(num2 + ".") : setNum1(num1 + ".");
    }
  };

  const negativePositive = (number) => {
    if (isOp) {
      if (Number(number) === Math.abs(number)) {
        let newNumber = -number;
        setNum2("" + newNumber);
        setDisplay("" + newNumber);
      } else {
        setNum2(Math.abs("" + number));
        setDisplay(Math.abs("" + number));
      }
    } else {
      if (Number(number) === Math.abs("" + number)) {
        let newNumber = -number;
        setNum1("" + newNumber);
        setDisplay("" + newNumber);
      } else {
        setNum1(Math.abs("" + number));
        setDisplay(Math.abs("" + number));
      }
    }
  };

  const equal = (numberOnHold, num2, whichOperator) => {
    let operation = new Mycalculator(numberOnHold, whichOperator, num2);
    let res = operation.whichCalc();
    setDisplay(res);
    setResetOp(false);
    setNum1(res);
    setNum2("");
    setIsOp(false);
    setnumberOnHold("");
    setwhichOperator("");
    setMemory((mem) => [
      ...mem,
      `${numberOnHold} ${whichOperator} ${num2} = ${res}`,
    ]);
  };

  const addNumber = (num) => {
    setBol(false);
    if (num1 === "" && !isOp) {
      log("scope 1");
      setDisplay("" + display + num);
      setNum1("" + num1 + num);
    } else if (num1 !== "" && !isOp) {
      log("scope 2");
      setDisplay("" + display + num);
      setNum1("" + num1 + num);
    } else if (num2 === "" && isOp) {
      log("scope 3");
      setDisplay("" + display + num);
      setNum2("" + num2 + num);
    } else if (num2 !== "" && isOp) {
      log("scope 4");
      setDisplay("" + display + num);
      setNum2("" + num2 + num);
    }
  };

  return (
    <>
      <Title />
      <div className="topContainer">
        <Log memory={memory} />
        <div className="container">
          <div className="calculator">
            <Display display={display} />
            <div className="underDisplay">
              <Firstline
                clear={clear}
                negativePositive={negativePositive}
                display={display}
                doubleFunc={doubleFunc}
              />
              <div className="second line">
                <Number number="7" col_span="1" addNumber={addNumber} />
                <Number number="8" col_span="1" addNumber={addNumber} />
                <Number number="9" col_span="1" addNumber={addNumber} />
                <Operator
                  operator="*"
                  cssClass="multiplication"
                  doubleFunc={doubleFunc}
                />
              </div>
              <div className="third line">
                <Number number="4" col_span="1" addNumber={addNumber} />
                <Number number="5" col_span="1" addNumber={addNumber} />
                <Number number="6" col_span="1" addNumber={addNumber} />
                <Operator
                  operator="-"
                  cssClass="subtraction"
                  doubleFunc={doubleFunc}
                />
              </div>
              <div className="fourth line">
                <Number number="1" col_span="1" addNumber={addNumber} />
                <Number number="2" col_span="1" addNumber={addNumber} />
                <Number number="3" col_span="1" addNumber={addNumber} />
                <Operator
                  operator="+"
                  cssClass="addition"
                  doubleFunc={doubleFunc}
                />
              </div>
              <div className="fifth line">
                <Number number="0" col_span="2" addNumber={addNumber} />
                <Comma comma={comma} />
                <Equal
                  numberOnHold={numberOnHold}
                  num2={num2}
                  whichOperator={whichOperator}
                  equal={equal}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
