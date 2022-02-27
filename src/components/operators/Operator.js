import React from "react";

const Operator = ({ operator, cssClass }) => {
  return <td className={"right " + cssClass}>{operator}</td>;
};

export default Operator;
