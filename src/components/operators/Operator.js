import React from "react";

const Operator = ({ operator, cssClass, doubleFunc }) => {
  return (
    <div
      className={"box right " + cssClass}
      onClick={() => doubleFunc.onClick(operator)}
    >
      {operator}
    </div>
  );
};

export default Operator;
