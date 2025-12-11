import React from "react";

export default function About() {
  return (
    <>
      <section className="about-section d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="text-center">
            <h2 className="text-uppercase fw-bold">about component</h2>
            <div className="d-inline-block px-3 star-icon">
              <i className="fas fa-star"></i>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-md-6">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
            <div className="col-md-6">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
