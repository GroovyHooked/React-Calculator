const Six = () => {

  const displayNum = () => {
    const num = document.querySelector('.six')
    const display = document.querySelector('.result')
    display.innerHTML += num.innerHTML
  };

  return <td className="six" onClick={displayNum}>6</td>;
};

export default Six;
