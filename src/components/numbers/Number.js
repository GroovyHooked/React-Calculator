import React from "react";

const Number = ({ number, col_span }) => {
  const displayNum = () => {
    const display = document.querySelector(".result");
    display.innerHTML += number;
  };

  return (
    <td onClick={displayNum} colSpan={col_span}>
      {number}
    </td>
  );
};

export default Number;
