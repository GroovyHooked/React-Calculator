const Seven = () => {

  const displayNum = () => {
    const num = document.querySelector('.seven')
    const display = document.querySelector('.result')
    display.innerHTML += num.innerHTML
  };

  return <td className="seven" onClick={displayNum}>7</td>;
};

export default Seven;
