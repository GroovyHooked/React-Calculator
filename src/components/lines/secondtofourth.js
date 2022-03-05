import React from "react";
import Number from "../Number";
import Operator from "../Operator";

export const SecondToFourth = (
  {numA,
  numB,
  numC,
  addNumber,
  doubleFunc,
  operator,
  cssClass}
) => {
  return (
    <div className={"second line " + cssClass}>
      <Number number={numA} col_span="1" addNumber={addNumber} />
      <Number number={numB} col_span="1" addNumber={addNumber} />
      <Number number={numC} col_span="1" addNumber={addNumber} />
      <Operator
        operator={operator}
        cssClass={cssClass}
        doubleFunc={doubleFunc}
      />
    </div>
  );
};

