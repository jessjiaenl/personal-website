function Hello(props) {
  return (
    <div>
      <h1 style={{position:"absolute", top: "20vh", left:props.left}}>
        Hello!<br/>
        I'm Jessica (Jia-En)
      </h1>
      <h2 style={{position:"absolute", top: "45vh", left:props.left}}>
        Welcome to my website
      </h2>
    </div>
  );
}

export default Hello;