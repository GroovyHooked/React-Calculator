const Equal = (num1, num2, whichOperator, equal) => {
  return (
    <td
      className="right equal"
      onClick={() => equal(num1, num2, whichOperator)}
    >
      =
    </td>
  );
};

export default Equal;
