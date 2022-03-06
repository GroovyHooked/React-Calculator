const Log = ({ memory }) => {
  return (
    <div className="logs">
      <div className="title">Memorised operations</div>
      {memory.map((element, i) => {
        return <p key={i}>{element}</p>;
      })}
    </div>
  );
};

export default Log;
