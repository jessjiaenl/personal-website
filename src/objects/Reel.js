import { useRef} from "react";

// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

function Reel() {
  // const reel = useRef();

  // useGSAP(() => {
  //   gsap.to(reel.current, {x:300});
  // });
  
  return (
    <>
    <a href="/resume">
      <img src={process.env.PUBLIC_URL + "/assets/reel.svg"}
        style={{height:"15vh", position:"absolute", top:"38vh", left:4825}}/>
    </a>
    </>
  );
}

export default Reel;