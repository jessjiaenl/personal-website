function Home() {
  return (
    <>
      <div>
        <img src={process.env.PUBLIC_URL + "/assets/me.svg"} 
          style={{height:"45vh", position:"absolute", top:"20vh", left:"20vw"}}/>
      </div>
      <div style={{
        width:"100vw",
        height:"10vh",
        position:"fixed",
        top:"90vh",
        left:"0",
        backgroundColor:"var(--floor)"}}>
      </div>
    </>
  );
}

export default Home;