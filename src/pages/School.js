import { motion } from "framer-motion";
import Floor from '../components/Floor';

function School() {
  return (
    <>
      <h2 style={{position:"absolute", top:"5vh", left:"5vh"}}>
        "Passionate about learning" means that I enjoyed learning nearly every concept across all course I've taken. <br/>
        Even outside of STEM, I loved learning literature, new musical instruments, choreography, and creative activities <br/>
        like writing, painting, and drawing all assets on this website.
      </h2>
      {/* <Floor/> */}
      <table style={{position:"absolute", top:"20vh", left:"5vh"}}>
        <caption>Carnegie Mellon University: Graduated with University Honors</caption>
        <thead>
          <th scope="col">Course</th>
          <th scope="col">Notes</th>
          <th scope="col">Grade</th>
        </thead>
        <tbody>
          <tr>
            <th scope="row">15213</th>
            <td>Computer Systems</td>
            <td>A</td>
          </tr>
          <tr>
            <th scope="row">15210</th>
            <td>Parallel Data Structure & Algorithms</td>
            <td>A</td>
          </tr>
          <tr>
            <th scope="row">15150</th>
            <td>Functional Programming</td>
            <td>A</td>
          </tr>
          <tr>
            <th scope="row">05318</th>
            <td>Human-AI Interaction</td>
            <td>A</td>
          </tr>
          <tr>
            <th scope="row">10315</th>
            <td>Machine Learning</td>
            <td>A</td>
          </tr>
          <tr>
            <th scope="row">15281</th>
            <td>Artificial Intelligence</td>
            <td>A</td>
          </tr>
          <tr>
            <th scope="row">53353</th>
            <td>Game Engines</td>
            <td>A</td>
          </tr>
          <tr>
            <th scope="row">53373</th>
            <td>VR Game Development</td>
            <td>A</td>
          </tr>
          <tr>
            <th scope="row">15122</th>
            <td>Imperative Computation (Data Structure & Algorithms)</td>
            <td>A</td>
          </tr>
          <tr>
            <th scope="row">15112</th>
            <td>Fundamentals of Programming</td>
            <td>A</td>
          </tr>
        </tbody>
      </table>

      <table style={{position:"absolute", top:"20vh", left:"100vh"}}>
        <caption> </caption>
        <thead>
          <th scope="col">Course</th>
          <th scope="col">Notes</th>
          <th scope="col">Grade</th>
        </thead>
        <tbody>
          <tr>
            <th scope="row">15213</th>
            <td>Computer Systems</td>
            <td>A</td>
          </tr>
          <tr>
            <th scope="row">15210</th>
            <td>Parallel Data Structure & Algorithms</td>
            <td>A</td>
          </tr>
          <tr>
            <th scope="row">15150</th>
            <td>Functional Programming</td>
            <td>A</td>
          </tr>
          <tr>
            <th scope="row">05318</th>
            <td>Human-AI Interaction</td>
            <td>A</td>
          </tr>
          <tr>
            <th scope="row">10315</th>
            <td>Machine Learning</td>
            <td>A</td>
          </tr>
          <tr>
            <th scope="row">15281</th>
            <td>Artificial Intelligence</td>
            <td>A</td>
          </tr>
          <tr>
            <th scope="row">53353</th>
            <td>Game Engines</td>
            <td>A</td>
          </tr>
          <tr>
            <th scope="row">53373</th>
            <td>VR Game Development</td>
            <td>A</td>
          </tr>
          <tr>
            <th scope="row">15122</th>
            <td>Imperative Computation (Data Structure & Algorithms)</td>
            <td>A</td>
          </tr>
          <tr>
            <th scope="row">15112</th>
            <td>Fundamentals of Programming</td>
            <td>A</td>
          </tr>
        </tbody>
      </table>

    </>
  );
}

export default School;