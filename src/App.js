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
  const [clearBool, setClearBool] = useState(false);
  const [addBOol, setAddBool] = useState(false);

  const clear = () => {
    if (!clearBool) {
      setDisplay("");
      setNum1("");
      setNum2("");
      setResetOp(false);
      setwhichOperator("");
      setClearBool(true);
    } else {
      setDisplay("");
      setNum1("");
      setNum2("");
      setResetOp(false);
      setwhichOperator("");
      setMemory([]);
      setClearBool(false);
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
    if (display.includes("*")) return;
    if (display.includes("+")) return;
    if (display.includes("/")) return;
    if (display.includes("-")) return;
    if (display.includes("%")) return;
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
    const stringRes = String(res);
    if (stringRes.length > 9 && !stringRes.includes(".")) {
      if (stringRes[1] > 8 || stringRes[1] < 2) {
        setDisplay(`${Math.floor(stringRes[0])}e${stringRes.length - 1}`);
        setMemory((mem) => [
          ...mem,
          `${numberOnHold} ${whichOperator} ${num2} = ${Math.floor(
            stringRes[0]
          )}e${stringRes.length - 1}`,
        ]);
      } else {
        setDisplay(
          `${Math.floor(stringRes[0])}.${Math.floor(stringRes[1])}${Math.floor(
            stringRes[2]
          )}${Math.floor(stringRes[3])}${Math.floor(stringRes[4])}e${
            stringRes.length - 1
          }`
        );
        setMemory((mem) => [
          ...mem,
          `${numberOnHold} ${whichOperator} ${num2} = ${Math.floor(
            stringRes[0]
          )}.${Math.floor(stringRes[1])}${Math.floor(stringRes[2])}${Math.floor(
            stringRes[3]
          )}${Math.floor(stringRes[4])}e${stringRes.length - 1}`,
        ]);
      }
    } else if (stringRes.length > 9 && stringRes.includes(".")) {
      if (stringRes[1] > 8 && stringRes[1] < 2) {
        setDisplay(
          `${Math.floor(stringRes[0])}.${Math.floor(stringRes[1])}${Math.floor(
            stringRes[2]
          )}e${stringRes.length - 1}`
        );
        setMemory((mem) => [
          ...mem,
          `${numberOnHold} ${whichOperator} ${num2} = ${Math.floor(
            stringRes[0]
          )}.${Math.floor(stringRes[1])}${Math.floor(stringRes[2])}e${
            stringRes.length - 1
          }`,
        ]);
      } else {
        setDisplay(
          `${Math.floor(stringRes[0])}.${Math.floor(stringRes[1])}${Math.floor(
            stringRes[2]
          )}${Math.floor(stringRes[3])}${Math.floor(stringRes[4])}e${
            stringRes.length - 1
          }`
        );
        setMemory((mem) => [
          ...mem,
          `${numberOnHold} ${whichOperator} ${num2} = ${Math.floor(
            stringRes[0]
          )}.${Math.floor(stringRes[1])}${Math.floor(stringRes[2])}${Math.floor(
            stringRes[3]
          )}${Math.floor(stringRes[4])}e${stringRes.length - 1}`,
        ]);
      }
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
    if (false) {
      debugger;
    }
    log(display[0], display[1], display[2], display[3]);
    log("display.length " + display.length);

    if (display.length > 9 || !addBOol) {
      setAddBool(true);
      let count = 0;
      if (num1 === "" && !isOp) {
        log("scope 1");
        setDisplay("" + display + num);
        setNum1("" + num1 + num);
      } else if (num1 !== "" && !isOp) {
        log("display.length", display.length);
        log("scope A2");
        count = Number(display.length);
        setDisplay(
          "" +
            display[0] +
            "." +
            display[1] +
            display[2] +
            display[3] +
            display[4] +
            "e" +
            display.length
        );
        setNum1("" + num1 + num);
      } else if (num1 !== "" && !isOp) {
        log("display.length", display.length);
        log("scope ABis2");
        setDisplay(display + count);
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
    } else if (display.length > 9 || addBOol) {
      setAddBool(true);
      let count = 0;
      if (num1 === "" && !isOp) {
        log("scope 1");
        setDisplay("" + display + num);
        setNum1("" + num1 + num);
      } else if (num1 !== "" && !isOp) {
        log("display.length", display.length);
        log("scope A2");
        count = Number(display.length);
        setDisplay("" + display + count++);
        setNum1("" + num1 + num);
      } else if (num1 !== "" && !isOp) {
        log("display.length", display.length);
        log("scope ABis2");
        setDisplay(display + count);
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
    } else {
      if (num1 === "" && !isOp) {
        log("scope 1");
        setDisplay("" + display + num);
        setNum1("" + num1 + num);
      } else if (num1 !== "" && !isOp) {
        log("scope B2");
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
