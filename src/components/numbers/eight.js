const Eight = () => {

  const displayNum = () => {
    const num = document.querySelector('.eight')
    const display = document.querySelector('.result')
    display.innerHTML += num.innerHTML
  };

  return <td className="eight" onClick={displayNum}>8</td>;
};

export default Eight;
