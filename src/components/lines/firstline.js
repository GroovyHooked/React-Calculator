import React from "react";
import Clear from "../various/clear";
import PositiveOrNegative from "../various/positiveOrNegative";
import Modulus from "../various/modulus";
import Operator from "../Operator";

export const Firstline = ({ clear, negativePositive, display, doubleFunc }) => {
  return (
    <div className="first line">
      <Clear clear={clear} />
      <PositiveOrNegative
        negativePositive={negativePositive}
        number={display}
      />
      <Modulus operator="%" cssClass="modulus" doubleFunc={doubleFunc} />
      <Operator operator="/" cssClass="division" doubleFunc={doubleFunc} />
    </div>
  );
};
