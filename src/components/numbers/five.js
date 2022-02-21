const Five = () => {

  const displayNum = () => {
    const num = document.querySelector('.five')
    const display = document.querySelector('.result')
    display.innerHTML += num.innerHTML
  };

  return <td className="five" onClick={displayNum}>5</td>;
};

export default Five;
