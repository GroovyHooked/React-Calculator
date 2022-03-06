import { useState } from "react";
import "./App.scss";

import Mycalculator from "./components/various/Logic";
import Title from "./components/various/Title";

import { Calculator } from "./Calculator";

const log = console.log;

const App = () => {
  const [display, setDisplay] = useState("");
  const [number, setNumber] = useState("");
  const [numberOnHold, setnumberOnHold] = useState("");
  const [whichOperator, setwhichOperator] = useState("");
  const [memory, setMemory] = useState([]);
  const [clearBool, setClearBool] = useState(false);
  const [result, setResult] = useState("");
  const [exponentOnHold, setExponentOnHold] = useState("");

  const clear = () => {
    if (!clearBool) {
      setDisplay("");
      setNumber("");
      setwhichOperator("");
      setClearBool(true);
    } else {
      setDisplay("");
      setNumber("");
      setwhichOperator("");
      setMemory([]);
      setClearBool(false);
      setnumberOnHold("")
    }
  };


  const opOnOrOff = () => {
    console.log("test")
  };

  const operator = (op) => {
    // if (display.includes("*")) return;
    // if (display.includes("+")) return;
    // if (display.includes("/")) return;
    // if (display.includes("-")) return;
    // if (display.includes("%")) return;

    setwhichOperator(op);
    setDisplay("" + display + op);
    // eslint-disable-next-line no-unused-expressions
    (numberOnHold === "") ? setnumberOnHold(number) : null
    setNumber("");
    if(number > 9){
       setExponentOnHold("" + number[0] +
         "." +
         number[1] +
         number[2] +
         number[3] +
         number[4] +
         "e" +
         number.length);
    }
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
    setResult(String(res));
    if (result.length > 9 && !result.includes(".")) {
      log("Scope A");
      setDisplay(
        `${Math.floor(result[0])}.${Math.floor(result[1])}${Math.floor(
          result[2]
        )}${Math.floor(result[3])}${Math.floor(result[4])}e${
          result.length - 1
        }`
      );
      setResult( `${Math.floor(result[0])}.${Math.floor(result[1])}${Math.floor(
        result[2]
      )}${Math.floor(result[3])}${Math.floor(result[4])}e${
        result.length - 1
      }`)
      setMemory((mem) => [
        ...mem,
        `${numberOnHold} ${whichOperator} ${number} = ${Math.floor(
          result[0]
        )}.${Math.floor(result[1])}${Math.floor(result[2])}${Math.floor(
          result[3]
        )}${Math.floor(result[4])}e${result.length - 1}`,
      ]);
    } else if (result.length > 9 && result.includes(".")) {
      log("Scope B");
      setDisplay(
        `${Math.floor(result[0])}.${Math.floor(result[1])}${Math.floor(
          result[2]
        )}${Math.floor(result[3])}${Math.floor(result[4])}e${
          result.length - 1
        }`
      );
      setResult(`${Math.floor(result[0])}.${Math.floor(result[1])}${Math.floor(
        result[2]
      )}${Math.floor(result[3])}${Math.floor(result[4])}e${
        result.length - 1
      }`)
      setMemory((mem) => [
        ...mem,
        `${numberOnHold} ${whichOperator} ${number} = ${Math.floor(
          result[0]
        )}.${Math.floor(result[1])}${Math.floor(result[2])}${Math.floor(
          result[3]
        )}${Math.floor(result[4])}e${result.length - 1}`,
      ]);
    } else {
      log("Scope C");
      setDisplay(res);
      setMemory((mem) => [
        ...mem,
        `${numberOnHold} ${whichOperator} ${number} = ${res}`,
      ]);
      setResult(res)
      setnumberOnHold(res);
    }

    setNumber("");
    setnumberOnHold(res);
    setwhichOperator("");
  };

  const addNumber = (num) => {
    if (number.length <= 9) {
      if (number === "") {
        setDisplay("" + display + num);
        setNumber("" + number + num);
      } else {
        setDisplay("" + display + num);
        setNumber("" + number + num);
      }
      // end [ (display.length <= 9) ]
    } else {
      if (number === "") {
        setDisplay("" + display + num);
        setNumber("" + number + num);
      } else {      
        setDisplay(
          "" + exponentOnHold + whichOperator +
          number[0] +
            "." +
            number[1] +
            number[2] +
            number[3] +
            number[4] +
            "e" +
            number.length
        );
        setNumber("" + number + num);
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
        number={number}
        equal={equal}
        whichOperator={whichOperator}
        memory={memory}
      />
    </>
  );
};

export default App;
