const Equal = ({ numberOnHold, num2, whichOperator, equal }) => {
  return (
    <div
      className="right equal box"
      onClick={() => equal(numberOnHold, num2, whichOperator)}
    >
      =
    </div>
  );
};

export default Equal;
