function Me() {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + "/assets/me.svg"} 
        style={{height:"45vh", position:"absolute", top:"20vh", left:260}}/>
    </div>
  );
}

export default Me;