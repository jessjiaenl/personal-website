function DrawingBoard() {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + "/assets/drawingBoard.svg"} // 4412
        style={{height:"20vh", position:"absolute", top:"16.5vh", left:"1.5vh"}}/> 
    </div>
  );
}

export default DrawingBoard;