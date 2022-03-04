const Modulus = ({ operator, cssClass, doubleFunc }) => {
  return (
    <div
      className={"box top-left " + cssClass}
      onClick={() => doubleFunc.onClick(operator)}
    >
      %
    </div>
  );
};

export default Modulus;
