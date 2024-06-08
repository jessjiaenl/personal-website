import Switch from '../components/Switch';

function Bench(props) {
  return (
    <div style={{position:"relative", left:props.left}}>
      <img src={process.env.PUBLIC_URL + "/assets/bench.svg"}
        style={{height:"20vh", position:"relative", top:"75vh"}}/>
      <Switch/>
    </div>
  );
}

export default Bench;