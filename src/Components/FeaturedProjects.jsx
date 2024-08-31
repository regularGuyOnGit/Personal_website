import React from "react";

function FeaturedProject({ screenSize }) {
  return (
    <>
      <div>
        <strong id="featuredProjects"> Featured Projects</strong>
      </div>
      <div className="row gx-0  justify-content-around ">
        <div className="col-12 d-flex justify-content-center justify-content-sm-start col-md-3 ">
          <div
            style={{ backgroundColor: "rgb(237, 234, 228)" }}
            className="card mt-0 mt-lg-2"
          >
            <img
              className="card-img-top img-fluid rounded p-2"
              src="Pics/Dashboard.png"
              alt="Card image cap"
              style={
                screenSize <= 768 && screenSize >= 550
                  ? { width: "25rem", height: "20rem", margin: "0 auto" }
                  : {}
              }
            />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "rgb(145, 10, 103)" }}>
                Crypto-Dashboard
              </h5>
              <p className="card-text">
                A crypto dashboard that tracks currency trends, allows coin
                searches, displays market cap values, and supports conversions
                and portfolio management. It offers comprehensive insights for
                informed investment decisions.
              </p>
              <a
                href="https://cryptodashboardlua.netlify.app/"
                className="btn btn-success"
                target="_"
              >
                Live Link
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center justify-content-sm-start col-md-4 ">
          <div
            style={{ backgroundColor: "rgb(199, 197, 198)" }}
            className="card mt-0 mt-lg-2"
          >
            <img
              className="card-img-top img-fluid rounded p-2"
              src="Pics/Blog Api.png"
              alt="Card image cap"
              style={
                screenSize <= 768 && screenSize >= 550
                  ? { width: "25rem", height: "20rem", margin: "0 auto" }
                  : {}
              }
            />
            <div className="card-body ">
              <h5
                className="card-title"
                style={{
                  backgroundColor: "rgb(199, 187, 198)",
                  color: "rgb(145, 10, 103)",
                }}
              >
                Blog{" "}
              </h5>
              <p className="card-text">
                A blog application using the MERN stack, where users can log in
                to read and comment on posts, while admins have the ability to
                create new blogs and manage comments, including deletion.
              </p>
              <a
                href="https://github.com/regularGuyOnGit/backend_blogApi.git"
                target="_"
                className="btn btn-success"
              >
                Live Link
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center justify-content-sm-start col-md-3 ">
          <div
            style={{ backgroundColor: "rgb(237, 234, 228)" }}
            className="card mt-0 mt-lg-2 "
          >
            <img
              className="card-img-top img-fluid rounded p-2"
              src="Pics/shortkart.png"
              alt="Card image cap"
              style={
                screenSize <= 768 && screenSize >= 550
                  ? { width: "25rem", height: "20rem", margin: "0 auto" }
                  : {}
              }
            />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "rgb(145, 10, 103)" }}>
                Shopping Cart
              </h5>
              <p className="card-text">
                A single-page application (SPA) shopping cart that efficiently
                manages user interactions with a seamless interface. It includes
                product listings, real-time cart updates, and dynamic total
                calculations, all within a single page for a streamlined and
                intuitive shopping experience.
              </p>
              <a
                href="https://shopkartres.netlify.app/"
                target="_"
                className="btn btn-success"
              >
                Live Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedProject;
