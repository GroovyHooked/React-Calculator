import React from "react";
import Number from "../Number";
import Comma from "../various/comma";
import Equal from "../various/equal";

export const Fifthline = ({
  addNumber,
  comma,
  numberOnHold,
  num2,
  whichOperator,
  equal,
}) => {
  return (
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
  );
};
