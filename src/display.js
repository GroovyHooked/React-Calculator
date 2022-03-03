const Display = ({ display }) => {
  return (
    <div className="display">
      <div colSpan="4" className="result">
        {display}
      </div>
    </div>
  );
};

export default Display;
