function Hello(props) {
  return (
    <div>
      <h1 style={{position:"absolute", top: "20vh", left:props.left}}>
        Jessica (Jia-En) Lee
      </h1>
      <h2 style={{position:"absolute", top: "38vh", left:props.left}}>
      Passionate about learning and interdisciplinary work, <br/>
      Jessica studied <b>Mathematics</b>, <b>Computer Science</b>, and <br/>
      <b>Game Design</b> at Carnegie Mellon University and decided to <br/>
      specialize in Computer Science at Cornell (Tech).
      </h2>
    </div>
  );
}

export default Hello;