import CMUTable from '../components/schoolPage/CMUTable';
import CTTable from '../components/schoolPage/CTTable';
import Certificates from '../components/schoolPage/Certificates';

import { motion } from "framer-motion";

function School() {
  const handleBackClick = (e) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <div style={{margin:10}}>
      <div>
        <h1 style={{fontSize: "5vh", textWrap:"pretty", textAlign: "center", marginTop:50, fontWeight:400}}>
          "Passionate about learning" means that I enjoyed learning nearly <br/>
          every concept across all course I've taken
        </h1>
        <h2 style={{textWrap:"pretty", textAlign: "center"}}>
          Even outside of STEM, I loved learning literature, new musical instruments, choreography, <br/>
          and creative activities like writing, painting, and drawing all assets on this website. <br/>
          Chekc out my notes linked below to understand more about the courses and how I orgnize knowledge.
        </h2>
      </div>
      <div>
        <h1 style={{fontSize: "5vh", textAlign: "center", marginTop:50, fontWeight:400}}>
          Selected Courses
        </h1>
      </div>
      <div className="dashboard" style={{marginTop:-20}}>
      {
        window.innerWidth > 1200 ? (
          <>
            <div style={{ minWidth: "calc(100vw / 3 - 20)" }}>
              <CTTable/>
            </div>
            <div style={{ minWidth: "calc(100vw / 3 - 20)" }}>
              <CMUTable/>
            </div>
            <div style={{ minWidth: "calc(100vw / 3 - 20)" }}>
              <Certificates/>
            </div>
          </>
        ) : (
          <>
            {
              window.innerWidth > 800 ? (
                <>
                  <div style={{ minWidth: "calc(100vw / 2 - 20)" }}>
                    <CTTable/>
                    <CMUTable/>
                  </div>
                  <div style={{ minWidth: "calc(100vw / 2 - 20)" }}>
                    <Certificates/>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ minWidth: "calc(100vw - 20)" }}>
                    <CTTable/>
                    <CMUTable/>
                    <Certificates/>
                  </div>
                </>
              )
            }
          </>
        )
      }
      </div>

      <a href="/" onClick={handleBackClick}>
        <div style={{position:"absolute", left:"50vw", transform:"translateX(-50%)"}}>
          <motion.img src={process.env.PUBLIC_URL + "/assets/closeButton.svg"}
                      style={{height:"10vh", marginTop:50, marginBottom:50}}
                      whileHover={{scale:1.1}}
                      whileTap={{scale:1}}
                      />
        </div>
      </a>
    </div>
  );
}

export default School;