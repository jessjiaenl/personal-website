function AboutMe(props) {
  return (
    <div>
      <h1 style={{position:"absolute", top: "20vh", left:props.left}}>
        About me
      </h1>
      <h2 style={{position:"absolute", top: "35vh", left:props.left}}>
        I like to think
      </h2>
    </div>
  );
}

export default AboutMe;