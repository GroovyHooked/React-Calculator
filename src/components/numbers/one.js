const One = () => {

  const displayNum = () => {
    const num = document.querySelector('.one')
    const display = document.querySelector('.result')
    display.innerHTML += num.innerHTML
  };

  return <td className="one" onClick={displayNum}>1</td>;
};

export default One;
