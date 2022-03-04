const PositiveOrNegative = ({ negativePositive, number }) => {
  return (
    <div
      className="box top-left positiveOrNegative"
      onClick={() => negativePositive(number)}
    >
      +/-
    </div>
  );
};

export default PositiveOrNegative;
