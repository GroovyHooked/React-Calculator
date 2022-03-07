import React from "react";
import Display from "./components/various/Display";
import Firstline from "./components/lines/Firstline";
import SecondToFourth from "./components/lines/Secondtofourth";
import Fifthline from "./components/lines/Fifthline";
import Log from "./components/various/Log";

export const Calculator = ({
  display,
  clear,
  negativePositive,
  doubleFunc,
  addNumber,
  comma,
  numberOnHold,
  number,
  equal,
  whichOperator,
  memory,
  shrinkClass,
}) => {
  return (
    <div className="container">
      <Log memory={memory} />
      <div className="calculator">
        <Display display={display} shrinkClass={shrinkClass} />
        <div className="underDisplay">
          <Firstline
            clear={clear}
            negativePositive={negativePositive}
            display={display}
            doubleFunc={doubleFunc}
          />
          <SecondToFourth
            numA="7"
            numB="8"
            numC="9"
            addNumber={addNumber}
            doubleFunc={doubleFunc}
            operator="*"
            cssClass="multiplication"
          />
          <SecondToFourth
            numA="4"
            numB="5"
            numC="6"
            addNumber={addNumber}
            doubleFunc={doubleFunc}
            operator="-"
            cssClass="subtraction"
          />
          <SecondToFourth
            numA="1"
            numB="2"
            numC="3"
            addNumber={addNumber}
            doubleFunc={doubleFunc}
            operator="+"
            cssClass="addition"
          />

          <Fifthline
            addNumber={addNumber}
            comma={comma}
            numberOnHold={numberOnHold}
            number={number}
            whichOperator={whichOperator}
            equal={equal}
          />
        </div>
      </div>
    </div>
  );
};
