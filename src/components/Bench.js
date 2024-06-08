import Switch from '../components/Switch';

function Bench() {
  return (
    <div style={{position:"relative", left:2500}}>
      <img src={process.env.PUBLIC_URL + "/assets/bench.svg"}
        style={{height:"20vh", position:"relative", top:"75vh"}}/>
      <Switch/>
    </div>
  );
}

export default Bench;