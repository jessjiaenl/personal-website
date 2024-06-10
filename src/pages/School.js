import { motion } from "framer-motion";
import Floor from '../components/Floor';
import CMUTable from '../components/CMUTable';
import CTTable from '../components/CTTable';
import Certificates from '../components/Certificates';

function School() {
  return (
    <>
      <div>
        <h2>
          {/* style={{position:"absolute", top:"5vh", left:"5vh"}} */}
          "Passionate about learning" means that I enjoyed learning nearly every concept across all course I've taken. <br/>
          Even outside of STEM, I loved learning literature, new musical instruments, choreography, and creative activities <br/>
          like writing, painting, and drawing all assets on this website.
        </h2>
      </div>
      <div>
        <h2> 
          {/* style={{position:"absolute", top:"20vh", left:"5vh"}} */}
          Carnegie Mellon University:<br/>
          GPA: 3.94<br/>
          Credits: 133.66 (401 CMU Units)<br/>
          Graduated with University Honors
        </h2>
      </div>
      {/* <h1>Selected Courses style={{position:"absolute", top:"30vh"}}</h1> */}
      {/* <Floor/> */}
      <div>
        <CMUTable/>
      </div>
      <div>
        <CTTable/>
      </div>
      <div>
        <Certificates/>
      </div>
    </>
  );
}

export default School;