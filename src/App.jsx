import React, { useState } from "react";
import About from "./Components/About";
import "./App.css";
import SkillsCorousel from "./Components/SkillsCorousel";
import FeaturedProject from "./Components/FeaturedProjects";
import Footer from "./Components/Footer";

function App() {
  // Dispatching the window size so that it is used in different components.
  const [width, setWidth] = useState(window.innerWidth);
  window.onresize = () => {
    setWidth(window.innerWidth);
  };
  console.log(width);

  return (
    <>
      <div id="main" className="container-xxl border-box px-0">
        <div className="row p-0 m-0 gy-2 gx-1 mb-2" id="aboutRow">
          <div className="col-12">
            <About />
          </div>
        </div>

        <div className="row p-0 m-0 gy-2 gx-1 mb-2" id="skillsRow">
          <div className="col-12">
            <SkillsCorousel screenSize={width} />
          </div>
        </div>
        <div className="row p-0 m-0 gy-2 gx-2 mb-2" id="featuredProjects">
          <div className="col-12">
            <FeaturedProject screenSize={width} />
          </div>
        </div>
      </div>
      <div className="row p-0 m-0 g-0" id="footer">
        <div className="col-12 ">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
