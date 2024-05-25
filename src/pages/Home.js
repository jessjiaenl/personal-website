function Home() {
  return (
    <>
      {/* floor */}
      <div style={{
        width:"100vw",
        height:"10vh",
        position:"fixed",
        top:"90vh",
        left:"0",
        backgroundColor:"var(--floor)"}}>
      </div>
      {/* me */}
      <div>
        <img src={process.env.PUBLIC_URL + "/assets/me.svg"} 
          style={{height:"45vh", position:"absolute", top:"20vh", left:300}}/>
      </div>
      {/* fence */}
      <div>
        <img src={process.env.PUBLIC_URL + "/assets/fence.svg"}
          style={{height:"40vh", position:"absolute", top:"55vh", left:1100}}/>
      </div>
      {/* about me */}
      <div>
        <h1 style={{position:"absolute", 
                    top: "20vh", 
                    left:1500}}>About me</h1>
      </div>
    </>
  );
}

export default Home;