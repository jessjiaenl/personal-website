function AboutMe(props) {
  return (
    <div>
      <h1 style={{position:"absolute", top: "18vh", left:props.left}}>
        About me
      </h1>
      <h2 style={{position:"absolute", top: "35vh", left:props.left}}>
      I applied machine learning to large-scale real-world data <br/>
      in computer vision and retail from analyzing and preprocessing <br/>
      the data, building and optimizing ML models, to deploying on<br/>
       GCP and Edge devices. <br/>
       Beside industrial experiences I also built some games.<br/><br/>

        <b>Languages:</b> Python, C/C++, SML, C#, JavaScript, HTML, CSS<br/>
        <b>Tools:</b> Git, TensorFlow, PyTorch, OpenCV, GCP, Unity, React, <br/>
        NumPy, Pandas, Scikit-learn, Linux<br/><br/>
        {/* <b> 
          #AnalyticalSkills #FastLearner #Empath #Organizational <br/>
          #Interdisciplinary #Calm <br/>
        </b> */}

      </h2>
    </div>
  );
}

export default AboutMe;