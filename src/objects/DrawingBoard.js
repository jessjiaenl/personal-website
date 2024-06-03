function DrawingBoard() {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + "/assets/drawingBoard.svg"}
        style={{height:"20vh", position:"absolute", top:"36.5vh", left:4412}}/>
    </div>
  );
}

export default DrawingBoard;