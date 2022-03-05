import { useState, useEffect } from "react";
import "./App.scss";

import Mycalculator from "./components/various/Logic";
import Title from "./components/various/Title";

import { Calculator } from "./Calculator";

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
    if (num2 !== "") return;
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
    if (display.search(/\./) !== -1) return;
    setDisplay(display + ".");
    whichOperator !== "" ? setNum2(num2 + ".") : setNum1(num1 + ".");
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
    console.log(String(res).length);
    debugger;
    if (String(res).length > 9) {
      setDisplay(
        "" + Math.floor(String(res)[0]) + "e" + (String(res).length - 1)
      );
      setMemory((mem) => [
        ...mem,
        `${numberOnHold} ${whichOperator} ${num2} = ${Math.floor(
          String(res)[0]
        )}e${String(res).length - 1}`,
      ]);
    } else {
      setDisplay(res);
      setMemory((mem) => [
        ...mem,
        `${numberOnHold} ${whichOperator} ${num2} = ${res}`,
      ]);
    }

    setResetOp(false);
    setNum1(res);
    setNum2("");
    setIsOp(false);
    setnumberOnHold("");
    setwhichOperator("");
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
      <Calculator
        display={display}
        clear={clear}
        negativePositive={negativePositive}
        doubleFunc={doubleFunc}
        addNumber={addNumber}
        comma={comma}
        numberOnHold={numberOnHold}
        num2={num2}
        equal={equal}
        whichOperator={whichOperator}
        memory={memory}
      />
    </>
  );
};

export default App;
