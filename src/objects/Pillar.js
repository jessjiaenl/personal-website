function Pillar(props) {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + "/assets/pillar.svg"}
        style={{height:"40vh", position:"absolute", top:"55vh", left:props.left}}/>
    </div>
  );
}

export default Pillar;