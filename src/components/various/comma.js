const Comma = () => {
  const coma = () => {
    const display = document.querySelector(".result");
    if (display.innerHTML === "" || display.innerHTML.includes(",")) return;
    display.innerHTML += ",";
  };

  return (
    <div className="box comma" onClick={coma}>
      ,
    </div>
  );
};

export default Comma;
