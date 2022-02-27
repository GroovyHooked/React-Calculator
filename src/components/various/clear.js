const Clear = () => {
  const clear = () => {
    const display = document.querySelector(".result");
    display.innerHTML = "";
  };

  return (
    <td className="top-left clear" onClick={clear}>
      AC
    </td>
  );
};

export default Clear;
