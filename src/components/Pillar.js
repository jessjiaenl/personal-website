import Reel from '../components/Reel';
import Mail from '../components/Mail';
import DrawingBoard from '../components/DrawingBoard';

function Pillar(props) {
  let objAbove;
  if ("Reel".localeCompare(props.objAbove) == 0) {
    objAbove = <Reel/>;
  } else if ("Mail".localeCompare(props.objAbove) == 0) {
    objAbove = <Mail/>;
  } else if ("DrawingBoard".localeCompare(props.objAbove) == 0) {
    objAbove = <DrawingBoard/>;
  }

  return (
    <div style={{position:"absolute", left:props.left}}>
      <img src={process.env.PUBLIC_URL + "/assets/pillar.svg"}
        style={{height:"40vh", position:"relative", top:"35vh"}}/>
      {objAbove}
    </div>
  );
}

export default Pillar;