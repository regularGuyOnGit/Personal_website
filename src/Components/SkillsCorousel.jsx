import React from "react";
// import "../assets/CustomCss/skillCorousel.css";
import Marquee from "react-fast-marquee";

function SkillsCorousel({ screenSize }) {
  return (
    <>
      <div className="row p-0 m-0 g-0 rounded">
        <strong id="techIUse"> Skilled In</strong>
        <div className="col-12">
          {/* <div className="logo-corousel-1"> */}
          <Marquee
            pauseOnHover={true}
            speed={80}
            gradient={true}
            gradientColor={`rgb(140, 10, 62)`}
            gradientWidth={60}
            pauseOnClick={true}
          >
            <div
              className="logos"
              style={{
                borderBottom: "0.3rem solid rgb(140, 10, 62) ",
                borderTop: "0.3rem solid rgb(140, 10, 62)",
              }}
            >
              <img
                className={screenSize > 1000 ? "me-5 ms-2" : "ms-2 me-4"}
                style={screenSize > 1000 ? { height: "4rem" } : {}}
                src={
                  screenSize > 1000
                    ? "logos/icons8-html-150.png"
                    : "logos/icons8-html-50.png"
                }
                alt="htmlLogo"
              />
              <img
                className={screenSize > 1000 ? "me-5 ms-2" : "ms-2 me-4"}
                style={screenSize > 1000 ? { height: "4rem" } : {}}
                src={
                  screenSize > 1000
                    ? "logos/icons8-css-150.png"
                    : "logos/icons8-css-50.png"
                }
                alt="cssLogo"
              />
              <img
                className={screenSize > 1000 ? "me-5 ms-2" : "ms-2 me-4"}
                style={screenSize > 1000 ? { height: "4rem" } : {}}
                src={
                  screenSize > 1000
                    ? "logos/icons8-bootstrap-150.png"
                    : "logos/icons8-bootstrap-50.png"
                }
                alt="bootstrapLogo"
              />
              <img
                className={screenSize > 1000 ? "me-5 ms-2" : "ms-2 me-4"}
                style={screenSize > 1000 ? { height: "4rem" } : {}}
                src={
                  screenSize > 1000
                    ? "logos/icons8-sass-150.png"
                    : "logos/icons8-sass-50.png"
                }
                alt="sassLogo"
              />
              <img
                className={screenSize > 1000 ? "me-5 ms-2" : "ms-2 me-4"}
                style={screenSize > 1000 ? { height: "4rem" } : {}}
                src={
                  screenSize > 1000
                    ? "logos/icons8-js-150.png"
                    : "logos/icons8-js-50.png"
                }
                alt="jsLogo"
              />
              <img
                className={screenSize > 1000 ? "me-5 ms-2" : "ms-2 me-4"}
                style={screenSize > 1000 ? { height: "4rem" } : {}}
                src={
                  screenSize > 1000
                    ? "logos/icons8-react-js-150.png"
                    : "logos/icons8-react-js-50.png"
                }
                alt="react-jsLogo"
              />
              <img
                className={screenSize > 1000 ? "me-5 ms-2" : "ms-2 me-4"}
                style={screenSize > 1000 ? { height: "4rem" } : {}}
                src={
                  screenSize > 1000
                    ? "logos/icons8-node-js-128.png"
                    : "logos/icons8-node-js-64.png"
                }
                alt="node-jsLogo"
              />
              <img
                className={screenSize > 1000 ? "me-5 ms-2" : "ms-2 me-4"}
                style={screenSize > 1000 ? { height: "4rem" } : {}}
                src={
                  screenSize > 1000
                    ? "logos/icons8-express-js-150.png"
                    : "logos/icons8-express-js-50.png"
                }
                alt="express-jsLogo"
              />
              <img
                className={screenSize > 1000 ? "me-5 ms-2" : "ms-2 me-4"}
                style={screenSize > 1000 ? { height: "4rem" } : {}}
                src={
                  screenSize > 1000
                    ? "logos/icons8-mongodb-144.png"
                    : "logos/icons8-mongodb-48.png"
                }
                alt="mongodb"
              />
              <img
                className={screenSize > 1000 ? "me-5 ms-2" : "ms-2 me-4"}
                style={screenSize > 1000 ? { height: "4.5rem" } : {}}
                src={
                  screenSize > 1000
                    ? "logos/icons8-sql-90.png"
                    : "logos/icons8-sql-60.png"
                }
                alt="sqlLogo"
              />
              <img
                className={screenSize > 1000 ? "me-5 ms-2" : "ms-2 me-4"}
                style={screenSize > 1000 ? { height: "4.5rem" } : {}}
                src={
                  screenSize > 1000
                    ? "logos/icons8-postgre-sql-a-free-and-open-source-relational-database-management-system-96.png"
                    : "logos/icons8-postgre-sql-a-free-and-open-source-relational-database-management-system-48.png"
                }
                alt="postgreLogo"
              />
              <img
                className={screenSize > 1000 ? "me-5 ms-2" : "ms-2 me-4"}
                style={screenSize > 1000 ? { height: "4rem" } : {}}
                src={
                  screenSize > 1000
                    ? "logos/icons8-github-120.png"
                    : "logos/icons8-github-60.png"
                }
                alt="githubLogo"
              />
            </div>
          </Marquee>

          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default SkillsCorousel;
