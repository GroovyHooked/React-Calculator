const Four = () => {
  const displayNum = () => {
    const num = document.querySelector('.four')
    const display = document.querySelector('.result')
    display.innerHTML += num.innerHTML
  };

  return <td className="four" onClick={displayNum}>4</td>;
};

export default Four;
