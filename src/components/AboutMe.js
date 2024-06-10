function AboutMe(props) {
  return (
    <div>
      <h1 style={{position:"absolute", top: "20vh", left:props.left}}>
        About me
      </h1>
      <h2 style={{position:"absolute", top: "35vh", left:props.left}}>
        <b>Languages:</b> Python, C/C++, SML, C#, JavaScript, HTML, CSS<br/>
        <b>Tools:</b> Git, TensorFlow, PyTorch, OpenCV, GCP, Unity, React, <br/>
        NumPy, Pandas, Scikit-learn <br/><br/>
        <b> #AnalyticalSkills #FastLearner #Empath #Organizational</b>
      </h2>
    </div>
  );
}

export default AboutMe;