import React from "react";

const Operator = ({ operator, cssClass, opOnOrOff, opfunc, double }) => {
  return (
    <div
      className={"box right " + cssClass}
      onClick={() => double.onClick(operator)}
    >
      {operator}
    </div>
  );
};

export default Operator;
