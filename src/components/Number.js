const Number = ({ number, col_span, addNumber }) => {
  return (
    <div className="box" colSpan={col_span} onClick={() => addNumber(number)}>
      {number}
    </div>
  );
};

export default Number;
