import { useState } from "react";
import "./App.scss";

import Mycalculator from "./components/various/Logic";
import Title from "./components/various/Title";

import { Calculator } from "./Calculator";

const log = console.log;

const App = () => {
  /*1*/ const [display, setDisplay] = useState("");
  /*2*/ const [number, setNumber] = useState("");
  /*3*/ const [numberOnHold, setnumberOnHold] = useState("");
  /*4*/ const [whichOperator, setwhichOperator] = useState("");
  /*5*/ const [memory, setMemory] = useState([]);
  /*6*/ const [clearBool, setClearBool] = useState(false);
  /*7*/ const [exponentOnHold1, setExponentOnHold1] = useState("");
  /*8*/ const [expo1Bool, setExpo1Bool] = useState(false);
  /*9*/ const [expo2Bool, setExpo2Bool] = useState(false);

  const shrinkNumber = () => {
    if (display.length > 18) {
      const screenDisplay = document.querySelector(".display");
      screenDisplay.style.fontSize = "19px";
    }
  };

  const clear = () => {
    if (!clearBool) {
      setDisplay("");
      setNumber("");
      setwhichOperator("");
      setExponentOnHold1("");
      setClearBool(true);
    } else {
      setDisplay("");
      setNumber("");
      setwhichOperator("");
      setMemory([]);
      setClearBool(false);
      setExponentOnHold1("");
      setnumberOnHold("");
    }
  };

  const opOnOrOff = () => {
    console.log("test");
  };

  const operator = (op) => {
    if (numberOnHold !== "" && whichOperator !== "" && numberOnHold !== "") {
      let operation = new Mycalculator(numberOnHold, whichOperator, number);
      let res = operation.whichCalc();
      log("Scope C");
      setDisplay(res);
      setMemory((mem) => [
        ...mem,
        `${numberOnHold} ${whichOperator} ${number} = ${res}`,
      ]);
      setnumberOnHold(res);
      setNumber("");
      setwhichOperator(op);
      setDisplay("" + res + op);
    } else {
      if (display.toString().includes("*")) return;
      if (display.toString().includes("+")) return;
      if (display.toString().includes("/")) return;
      if (display.toString().includes("-")) return;
      if (display.toString().includes("%")) return;

      setwhichOperator(op);
      setDisplay("" + display + op);
      // eslint-disable-next-line no-unused-expressions
      numberOnHold === "" ? setnumberOnHold(number) : null;
      setNumber("");
    }
  };

  const doubleFunc = {
    onClick: (op) => {
      opOnOrOff();
      operator(op);
    },
  };

  const comma = () => {
    if (number === "") return;
    if (number.search(/\./) !== -1) return;
    setDisplay(display + ".");
    setNumber(number + ".");
  };

  const negativePositive = (number) => {
    if (Number(number) === Math.abs(number)) {
      let newNumber = -number;
      setNumber("" + newNumber);
      setDisplay("" + newNumber);
    } else {
      setNumber(Math.abs("" + number));
      setDisplay(Math.abs("" + number));
    }
  };

  const equal = (numberOnHold, number, whichOperator) => {
    let operation = new Mycalculator(numberOnHold, whichOperator, number);
    let res = operation.whichCalc();
    let stringRes = res.toString();
    log("result => " + typeof stringRes + " " + stringRes);
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
        `${numberOnHold} ${whichOperator} ${number} = ${Math.floor(
          stringRes[0]
        )}.${Math.floor(stringRes[1])}${Math.floor(stringRes[2])}${Math.floor(
          stringRes[3]
        )}${Math.floor(stringRes[4])}e${stringRes.length - 1}`,
      ]);
      setnumberOnHold(res);
    } else if (stringRes.length > 9 && stringRes.includes(".")) {
      log("Scope B");
      setDisplay(
        `${Math.floor(stringRes[0])}${stringRes[1]}${Math.floor(
          stringRes[2]
        )}${Math.floor(stringRes[3])}${Math.floor(stringRes[4])}e${
          stringRes.length
        }`
      );
      setMemory((mem) => [
        ...mem,
        `${numberOnHold} ${whichOperator} ${number} = ${Math.floor(
          stringRes[0]
        )}.${Math.floor(stringRes[1])}${Math.floor(stringRes[2])}${Math.floor(
          stringRes[3]
        )}${Math.floor(stringRes[4])}e${stringRes.length}`,
      ]);
      setnumberOnHold(res);
      setNumber("");
      setwhichOperator("");
    } else {
      log("Scope C");
      setDisplay(res);
      setMemory((mem) => [
        ...mem,
        `${numberOnHold} ${whichOperator} ${number} = ${res}`,
      ]);
      setnumberOnHold(res);
      setNumber("");
      setwhichOperator("");
    }
  };

  const addNumber = (num) => {
    shrinkNumber();
    if (number.length <= 9) {
      if (number === "") {
        setDisplay("" + display + num);
        setNumber("" + number + num);
      } else {
        setDisplay("" + display + num);
        setNumber("" + number + num);
      }
    } else {
      log("scope exponent");
      if (number.includes(".")) {
        log("scope 1A");

        if (!expo1Bool && !expo2Bool) {
          setExpo1Bool(true);
          setExponentOnHold1(
            "" +
              number[0] +
              number[1] +
              number[2] +
              number[3] +
              number[4] +
              number[5] +
              "e" +
              number.length
          );
          setDisplay(exponentOnHold1);
        } else if (expo1Bool && !expo2Bool && whichOperator === "") {
          setExponentOnHold1(
            "" +
              number[0] +
              number[1] +
              number[2] +
              number[3] +
              number[4] +
              number[5] +
              "e" +
              number.length
          );
          setDisplay(exponentOnHold1);
        } else if (expo1Bool && !expo2Bool && whichOperator !== "") {
          setExpo2Bool(true);
          setDisplay(
            "" +
              exponentOnHold1 +
              whichOperator +
              number[0] +
              number[1] +
              number[2] +
              number[3] +
              number[4] +
              number[5] +
              "e" +
              number.length
          );
        } else if (expo1Bool && expo2Bool && whichOperator !== "") {
          setDisplay(
            "" +
              exponentOnHold1 +
              whichOperator +
              number[0] +
              number[1] +
              number[2] +
              number[3] +
              number[4] +
              number[5] +
              "e" +
              number.length
          );
        }
      } else {
        log("scope 1B");
        if (!expo1Bool && !expo2Bool) {
          log("scope 1BA");
          setExpo1Bool(true);
          setExponentOnHold1(
            "" +
              number[0] +
              "." +
              number[1] +
              number[2] +
              number[3] +
              number[4] +
              "e" +
              (number.length - 1)
          );
          setDisplay(exponentOnHold1);
        } else if (expo1Bool && !expo2Bool && whichOperator === "") {
          log("scope 1BB");
          setExponentOnHold1(
            "" +
              number[0] +
              "." +
              number[1] +
              number[2] +
              number[3] +
              number[4] +
              "e" +
              (number.length - 1)
          );
          setDisplay(exponentOnHold1);
        } else if (expo1Bool && !expo2Bool && whichOperator !== "") {
          log("scope 1BC");
          setDisplay(
            "" +
              exponentOnHold1 +
              whichOperator +
              number[0] +
              "." +
              number[1] +
              number[2] +
              number[3] +
              number[4] +
              "e" +
              (number.length - 1)
          );
        } else if (expo1Bool && expo2Bool && whichOperator !== "") {
          setDisplay(
            "" +
              exponentOnHold1 +
              whichOperator +
              number[0] +
              "." +
              number[1] +
              number[2] +
              number[3] +
              number[4] +
              "e" +
              (number.length - 1)
          );
        }
      }
      setNumber("" + number + num);
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
        number={number}
        equal={equal}
        whichOperator={whichOperator}
        memory={memory}
      />
    </>
  );
};

export default App;
