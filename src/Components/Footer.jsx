import React from "react";
import Cv from "../assets/CV.pdf";

function Footer() {
  return (
    <>
      <div
        style={{ backgroundColor: "rgb(130, 6, 89)" }}
        className="row gx-2 p-0 m-0 justify-content-center justify-content-sm-around "
      >
        <div className="col-12 col-sm-4  d-flex flex-column">
          <div className="footerText text-center ">Get In Touch</div>
          <div className="socialLogos d-flex justify-content-around justify-content-lg-center ">
            <a
              className="mx-2"
              href="https://www.linkedin.com/in/nitinrai98/"
              target="_"
            >
              <img
                style={{ width: "35px", height: "35px" }}
                src="logos/linkedin.png"
                alt="LinkedIn-logo"
              />
            </a>

            <a
              href="https://stackoverflow.com/users/23915101/nitin-rai"
              target="_"
            >
              <img
                className="mx-2"
                style={{ width: "35px", height: "35px" }}
                src="logos/stack-overflow.png"
                alt="Stack over flow-logo"
              />
            </a>

            <a href="https://github.com/regularGuyOnGit" target="_">
              {" "}
              <img
                className="mx-2"
                style={{ width: "35px", height: "35px" }}
                src="logos/icons8-github-60.png"
                alt="Github-logo"
              />
            </a>

            <a
              href="https://www.naukri.com/mnjuser/profile?id=&altresid"
              target="_"
            >
              <img
                className="mx-2"
                style={{ width: "35px", height: "35px" }}
                src="logos/naukari.com.png"
                alt="naukari.com-logo"
              />
            </a>
          </div>
        </div>
        <div className="col-12 col-sm-5  ">
          <div className="footerText text-center ">Send An Email</div>
          <a
            className="d-flex justify-content-center"
            href="mailto:nitinrai3000@gmail.com"
          >
            <img src="logos/icons8-gmail-logo-48.png" alt="gmail" />
          </a>
        </div>
        <a href={Cv} className="rights cvDownload" download={"CV"}>
          Click to download resume
        </a>
        <p className="rights"> &copy; All rights reserved!</p>
      </div>
    </>
  );
}

export default Footer;
