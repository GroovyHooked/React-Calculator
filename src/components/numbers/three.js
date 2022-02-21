const Three = () => {
  const displayNum = () => {
    const num = document.querySelector('.three')
    const display = document.querySelector('.result')
    display.innerHTML += num.innerHTML
  };

  return <td className="three" onClick={displayNum}>3</td>;
};

export default Three;
