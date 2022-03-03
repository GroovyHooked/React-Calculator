const Comma = () => {
  const coma = () => {
    const display = document.querySelector(".result");
    if (display.innerHTML === "" || display.innerHTML.includes(",")) return;
    display.innerHTML += ",";
  };

  return (
    <td className="comma" onClick={coma}>
      ,
    </td>
  );
};

export default Comma;
