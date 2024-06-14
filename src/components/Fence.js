function Fence(props) {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + "/assets/fence.svg"}
        style={{height:"40vh", position:"absolute", top:"55vh", left:props.left, zIndex:10}}/>
    </div>
  );
}

export default Fence;