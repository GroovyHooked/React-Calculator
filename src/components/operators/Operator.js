import React from "react";

const Operator = ({ operator, cssClass, opOnOrOff, opfunc, double }) => {
  return (
    <td
      className={"right " + cssClass}
      onClick={() => double.onClick(operator)}
    >
      {operator}
    </td>
  );
};

export default Operator;
