const Display = ({ display, shrinkClass }) => {
  return (
    <div className="display">
      <div
        colSpan="4"
        className={"result " + shrinkClass !== "" ? shrinkClass : ""}
      >
        {display}
      </div>
    </div>
  );
};

export default Display;
