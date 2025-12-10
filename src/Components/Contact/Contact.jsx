import React from "react";

export default function Contact() {
  return (
    <>
      <section className="contact-section d-flex justify-content-center">
        <div className="container">
          <div className="text-center pt-4">
            <h2 className="text-uppercase">conatct section</h2>
            <div className="d-inline-block px-3 star-icon">
              <i className="fas fa-star"></i>
            </div>
          </div>
          <div className="mt-5 d-flex justify-content-center">
            <form className="w-50">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control border-0 border-bottom"
                  id="floatingUserName"
                  placeholder=""
                />
                <label htmlFor="floatingUserName">User Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control border-0 border-bottom"
                  id="floatingAge"
                  placeholder=""
                />
                <label htmlFor="floatingAge">User Age</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control border-0 border-bottom"
                  id="floatingInput"
                  placeholder=""
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control border-0 border-bottom"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
