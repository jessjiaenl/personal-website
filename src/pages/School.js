import CMUTable from '../components/schoolPage/CMUTable';
import CTTable from '../components/schoolPage/CTTable';
import Certificates from '../components/schoolPage/Certificates';

function School() {
  return (
    <div style={{margin:10}}>
      <div>
        <h2 style={{textWrap:"pretty", textAlign: "center"}}>
          {/* style={{position:"absolute", top:"5vh", left:"5vh"}} */}
          "Passionate about learning" means that I enjoyed learning nearly every concept across all course I've taken. <br/><br/>
          Even outside of STEM, I loved learning literature, new musical instruments, choreography, and creative activities like writing, painting, and drawing all assets on this website.
        </h2>
      </div>
      <div className="dashboard">
      {
        window.innerWidth > 1200 ? (
          <>
            <div style={{ minWidth: "calc(100vw / 3 - 20)" }}>
              <CMUTable/>
            </div>
            <div style={{ minWidth: "calc(100vw / 3 - 20)" }}>
              <CTTable/>
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
                    <CMUTable/>
                    <CTTable/>
                  </div>
                  <div style={{ minWidth: "calc(100vw / 2 - 20)" }}>
                    <Certificates/>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ minWidth: "calc(100vw - 20)" }}>
                    <CMUTable/>
                    <CTTable/>
                    <Certificates/>
                  </div>
                </>
              )
            }
          </>
        )
      }
      </div>
    </div>
  );
}

export default School;