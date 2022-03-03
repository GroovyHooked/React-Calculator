const Display = ({ display }) => {
  return (
    <thead>
      <tr>
        <th colSpan="4" className="result">
          {display}
        </th>
      </tr>
    </thead>
  );
};

export default Display;
