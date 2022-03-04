import React from "react";

export const Log = ({ memory }) => {
  return (
    <div className="logs">
      <div className="title">Memorised operations</div>
      {memory.map((element) => {
        return <p>{element}</p>;
      })}
    </div>
  );
};

export default Log;
