const Nine = () => {
  const displayNum = () => {
    const num = document.querySelector('.nine')
    const display = document.querySelector('.result')
    display.innerHTML += num.innerHTML
  };

  return <td className="nine" onClick={displayNum}>9</td>;
};

export default Nine;
