const Clear = () => {
  const clear = () => {
    const display = document.querySelector(".result");
    display.innerHTML = "";
  };

  return (
    <div className=" box top-left clear" onClick={clear}>
      AC
    </div>
  );
};

export default Clear;
