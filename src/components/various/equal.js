const Equal = ({ numberOnHold, number, whichOperator, equal }) => {
  return (
    <div
      className="right equal box"
      onClick={() => equal(numberOnHold, number, whichOperator)}
    >
      =
    </div>
  );
};

export default Equal;
