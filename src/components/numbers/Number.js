import React from "react";

export default function Number({ number, col_span }) {
  console.log(col_span);
  const displayNum = () => {
    const display = document.querySelector(".result");
    display.innerHTML += number;
  };

  return (
    <td onClick={displayNum} colSpan={col_span}>
      {number}
    </td>
  );
}
