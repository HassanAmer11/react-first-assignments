import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-main py-5">
        <div className="container my-4">
          <div className="row">
            <div className="col-md-4">
              <div className="location  text-center">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive </p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="links text-center">
                <h3>AROUND THE WEB</h3>
                <div className="icons d-flex gap-3 justify-content-center align-items-center">
                  <i className="fa-brands fa-facebook icon" />
                  <i className="fa-brands fa-twitter icon" />
                  <i className="fa-brands fa-linkedin-in icon" />
                  <i className="fa-solid fa-globe icon" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="location text-center">
                <h3>ABOUT FREELANCER</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-dark text-light text-center text-capitalize py-3">
        Copyright © Your Website 2021
      </div>
    </>
  );
}
