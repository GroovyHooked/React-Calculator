const Two = () => {
  const displayNum = () => {
    const num = document.querySelector('.two')
    const display = document.querySelector('.result')
    display.innerHTML += num.innerHTML
  };

  return <td className="two" onClick={displayNum}>2</td>;
};

export default Two;
