import React from "react";

const Number = ({ number, col_span, addNumber }) => {
  return (
    <td colSpan={col_span} onClick={() => addNumber(number)}>
      {number}
    </td>
  );
};

export default Number;
