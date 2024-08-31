import React from "react";
import Typed from "typed.js";
import { useRef, useEffect } from "react";
import selfPhoto from "../../public/Pics/webPhoto.jpg";

function About() {
  const dynamicSpan = useRef(null);
  useEffect(() => {
    const typed = new Typed(dynamicSpan.current, {
      strings: ["Full-Stack, ", "Energetic,", "Self-Motivated,"],
      typeSpeed: 40,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="row p-0 m-0 gx-4 gy-2">
        <div className="d-flex  justify-content-center  flex-column flex-md-row align-items-center align-start ">
          <div className="col-12 d-flex justify-content-center justify-content-md-center   col-md-2 ">
            <img
              src={selfPhoto}
              alt="Display_Photo"
              className="img-fluid rounded displayIMG "
              style={{ maxHeight: "13rem", borderRadius: "5rem" }}
            />
          </div>
          <div className=" col-12 col-md-10  ">
            <div className="row  mx-2">
              <div className="col">
                {" "}
                <span
                  className="fs-2 text-bold dynamicTyped"
                  ref={dynamicSpan}
                ></span>{" "}
              </div>
              <div className="col-12">
                {" "}
                <span className="fs-4 text-center staticallyTyped text-muted">
                  {" "}
                  Developer with a passion for creating impactful applications
                  that address real-world challenges. I am dedicated to
                  continuous learning and have a strong focus on innovative
                  problem-solving.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
