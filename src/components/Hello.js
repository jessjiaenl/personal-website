function Hello(props) {
  return (
    <div>
      <h1 style={{position:"absolute", top: "20vh", left:props.left}}>
        Jessica (Jia-En) Lee
      </h1>
      <h2 style={{position:"absolute", top: "38vh", left:props.left}}>
      Passionate about learning and interdisciplinary work, <br/>
      Jessica studied <b>Mathematics</b>, <b>Computer Science</b>, and <br/>
      <b>Game Design</b> at Carnegie Mellon University and is currently <br/>
      specializing in <b>Computer Science</b> at Cornell (Tech). <br/><br/>

      #AnalyticalSkills #FastLearner #Empath #Organizational <br/>
      #Interdisciplinary #Teamwork <br/>
      
      {/* She has applied machine learning to large-scale real-world <br/>
      data in computer vision and retail from analyzing and <br/>
      preprocessing the data, building and optimizing ML models,<br/>
      to deploying on GCP and Edge devices. */}
      </h2>
      {/* <h2 style={{position:"absolute", top: "58vh", left:props.left, fontSize:"2vh", fontWeight:500}}>
        #AnalyticalSkills #FastLearner #Empath #Organizational <br/>
        #Interdisciplinary #Calm <br/>
      </h2> */}
    </div>
  );
}

export default Hello;