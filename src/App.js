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
  const [isExponent, setIsExponent] = useState(false);
  const [expoCoutner, setExpoCoutner] = useState(11);

  const clear = () => {
    if (!clearBool) {
      setDisplay("");
      setNum1("");
      setNum2("");
      setResetOp(false);
      setwhichOperator("");
      setClearBool(true);
      setIsExponent(false);
      setExpoCoutner(10);
    } else {
      setDisplay("");
      setNum1("");
      setNum2("");
      setResetOp(false);
      setwhichOperator("");
      setMemory([]);
      setClearBool(false);
      setIsExponent(false);
      setExpoCoutner(10);
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

    setIsExponent(false);
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
      log("Scope A");
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
    } else if (stringRes.length > 9 && stringRes.includes(".")) {
      log("Scope B");
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
    } else {
      log("Scope C");
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
    //log("display.length " + display.length);
    let mybool = numberOnHold ? (num1.length <= 9) : (num2.length <= 9)
    log("num1", num1.length);
    log("num2", num2);
    log(mybool)
    if ( num1.length <= 9 && !isExponent) {
      log("scope 1 (num.length <= 9 && !isExponent)");
      if (num1 === "" && !isOp) {
        log("scope 2");
        setDisplay("" + display + num);
        setNum1("" + num1 + num);
      } else if (num1 !== "" && !isOp) {
        log("scope 3");
        setDisplay("" + display + num);
        setNum1("" + num1 + num);
      } else if (num2 === "" && isOp) {
        log("scope 4");
        setDisplay("" + display + num);
        setNum2("" + num2 + num);
      } else if (num2 !== "" && isOp) {
        log("scope 5");
        setDisplay("" + display + num);
        setNum2("" + num2 + num);
      }

      // end [ (display.length <= 9 && !isExponent) ]
    } else if (!isExponent) {
      setIsExponent(true);
      log("scope 6 (!isExponent)");

      if (num1 === "" && !isOp) {
        log('scope 7 (num1 === "" && !isOp)');
        setDisplay("" + display + num);
        setNum1("" + num1 + num);
      } else if (num1 !== "" && !isOp) {
        log("display.length", display.length);
        log('scope 8 (num1 !== "" && !isOp)');
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
      } else if (num2 === "" && isOp) {
        log("scope 10");
        setDisplay("" + display + num);
        setNum2("" + num2 + num);
      } else if (num2 !== "" && isOp) {
        log("scope 11");
        setDisplay(
          display +
            num2[0] +
            "." +
            num2[1] +
            num2[2] +
            num2[3] +
            num2[4] +
            "e" +
            num2.length
        );
        setNum2("" + num2 + num);
      }

      // End [ if (!isExponent) ]
    } else if (isExponent) {
      log("scope 12 (display.length > 9 || addBOol)");
      if (num1 === "" && !isOp) {
        log('scope 13 (num1 === "" && !isOp)');
        setDisplay("" + display + num);
        setNum1("" + num1 + num);
      } else if (num1 !== "" && !isOp) {
        log("display.length", display.length);
        log('scope 14 (num1 !== "" && !isOp)');
        setExpoCoutner(expoCoutner + 1);
        setDisplay(
          display[0] +
            display[1] +
            display[2] +
            display[3] +
            display[4] +
            "e" +
            expoCoutner
        );
        setNum1("" + num1 + num);
      } else if (num2 === "" && isOp) {
        log("scope 16");
        setDisplay("" + display + num);
        setNum2("" + num2 + num);
      } else if (num2 !== "" && isOp) {
        log("scope 17");
        setExpoCoutner(expoCoutner + 1);
        setDisplay(
          display[0] +
            display[1] +
            display[2] +
            display[3] +
            display[4] +
            "e" +
            expoCoutner
        );
        setNum2("" + num2 + num);
      }
    } // End [ if (isExponent) ]
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
