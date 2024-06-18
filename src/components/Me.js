import { useState } from "react"

function Me(props) {
  const horrorPortraitUrl = process.env.PUBLIC_URL + "/assets/horrorSelfPortrait.gif";
  const normalPortraitUrl = process.env.PUBLIC_URL + "/assets/pixelatedMe.gif";
  const [currentPortraitUrl, setCurrentPortraitUrl] = useState(normalPortraitUrl);

  const switchToHorror = () => {
    setCurrentPortraitUrl(horrorPortraitUrl);
  }
  const switchToNormal = () => {
    setCurrentPortraitUrl(normalPortraitUrl);
  }

  return (
    <div style={{position:"absolute", top:"20vh", left:props.left}}>
      <img src={process.env.PUBLIC_URL + "/assets/frames/emptyFrame.svg"}
        style={{height:"45vh", position:"absolute"}}/>
      <img src={currentPortraitUrl} 
        // onMouseEnter={switchToHorror}
        // onMouseLeave={switchToNormal}
        style={{height:"45vh", position:"absolute", top:"-5vh", left:`calc(${props.left} - 26.5vh)`}}/>
    </div>
  );
}

export default Me;