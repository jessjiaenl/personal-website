function Me(props) {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + "/assets/frames/me.svg"} 
        style={{height:"45vh", position:"absolute", top:"20vh", left:props.left}}/>
    </div>
  );
}

export default Me;