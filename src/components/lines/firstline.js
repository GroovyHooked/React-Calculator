import React from "react";
import Clear from "../various/Clear";
import PositiveOrNegative from "../various/PositiveOrNegative";
import Modulus from "../various/Modulus";
import Operator from "../Operator";

const Firstline = ({ clear, negativePositive, display, doubleFunc }) => {
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
export default Firstline;
