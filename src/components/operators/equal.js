const Equal = (num1, num2, whichOperator, equal) => {
  return (
    <div
      className="right equal box"
      onClick={() => equal(num1, num2, whichOperator)}
    >
      =
    </div>
  );
};

export default Equal;
