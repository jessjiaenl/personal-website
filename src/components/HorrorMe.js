function HorrorMe(props) {

  return (
    <div style={{position:"absolute", top:"20vh", left:props.left}}>
      <img src={process.env.PUBLIC_URL + "/assets/frames/emptyFrame.svg"}
        style={{height:"45vh", position:"absolute"}}/>
      <img src={process.env.PUBLIC_URL + "/assets/horrorSelfPortrait.gif"} 
        style={{height:"45vh", position:"absolute", top:"-5vh", left:`calc(${props.left} - 26.5vh)`}}/>
    </div>
  );
}

export default HorrorMe;