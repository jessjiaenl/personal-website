function Bench() {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + "/assets/bench.svg"}
        style={{height:"20vh", position:"absolute", top:"75vh", left:2500}}/>
    </div>
  );
}

export default Bench;