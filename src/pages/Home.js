import { useEffect } from 'react'

function Home() {
  var dir = 0;
  var intID;

  useEffect(() => {
    const doScroll = (dir) => {
      window.scrollBy(dir*3,0);
    }

    const scroll = (e) => {
      if (e.clientX <= 0.1*window.innerWidth && dir != -1) {
          dir = -1;      
          intID = setInterval(doScroll, 10, dir)


      } else if (e.clientX >= 0.9*window.innerWidth && dir != 1) {
          dir = 1;      
          intID = setInterval(doScroll, 10, dir)
    
      } else if (0.1*window.innerWidth < e.clientX && e.clientX < 0.9*window.innerWidth) {
        dir = 0;
        // window.scrollTo(?,0);
        clearInterval(intID);
      }

    }

    // run when mounted Home
    window.addEventListener("mousemove", scroll);

    // run when unmount Home, clear event listener
    return () => { window.removeEventListener("mousemove", scroll); };
  }, [])

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
      {/* bench */}
    </>
  );
}

export default Home;