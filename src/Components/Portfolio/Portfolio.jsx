import React from "react";
import port1 from "../../assets/images/poert1.png";
import port2 from "../../assets/images/port2.png";
import port3 from "../../assets/images/port3.png";

export default function Portfolio() {
    function showImage(e) {
      const imgParent = e.target.closest(".img-wrapper");
      const imgSrc = imgParent.firstElementChild.src;
      document.getElementById("selected_Img").src = imgSrc;
      const popup = document.querySelector(".img-popup");
      popup.classList.remove("d-none");
    }
    function hideImage() {
      const popup = document.querySelector(".img-popup");
      popup.classList.add("d-none");
    }
    return (
      <>
        <section className="portfolio-section">
          <div className="text-center pt-4 section-head">
            <h2 className="text-uppercase">portfolio component</h2>
            <div className="d-inline-block px-3 star-icon">
              <i className="fas fa-star"></i>
            </div>
          </div>

          <div className="py-4">
            <div className="container">
              <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                  <div
                    className="img-wrapper rounded-3 overflow-hidden position-relative"
                    onClick={(e) => {
                      showImage(e);
                    }}
                  >
                    <img src={port1} className="w-100 d-block" alt="..." />
                    <div className="overlay position-absolute top-0 bottom-0 start-0 end-0">
                      <div className="d-flex align-items-center justify-content-center h-100">
                        <i className="text-white fa-solid fa-plus fa-6x"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="img-wrapper rounded-3 overflow-hidden position-relative"
                    onClick={(e) => {
                      showImage(e);
                    }}
                  >
                    <img src={port2} className="w-100 d-block" alt="..." />
                    <div className="overlay position-absolute top-0 bottom-0 start-0 end-0">
                      <div className="d-flex align-items-center justify-content-center h-100">
                        <i className="text-white fa-solid fa-plus fa-6x"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="img-wrapper rounded-3 overflow-hidden position-relative"
                    onClick={(e) => {
                      showImage(e);
                    }}
                  >
                    <img src={port3} className="w-100 d-block" alt="..." />
                    <div className="overlay position-absolute top-0 bottom-0 start-0 end-0">
                      <div className="d-flex align-items-center justify-content-center h-100">
                        <i className="text-white fa-solid fa-plus fa-6x"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="img-wrapper rounded-3 overflow-hidden position-relative"
                    onClick={(e) => {
                      showImage(e);
                    }}
                  >
                    <img src={port1} className="w-100 d-block" alt="..." />
                    <div className="overlay position-absolute top-0 bottom-0 start-0 end-0">
                      <div className="d-flex align-items-center justify-content-center h-100">
                        <i className="text-white fa-solid fa-plus fa-6x"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="img-wrapper rounded-3 overflow-hidden position-relative"
                    onClick={(e) => {
                      showImage(e);
                    }}
                  >
                    <img src={port2} className="w-100 d-block" alt="..." />
                    <div className="overlay position-absolute top-0 bottom-0 start-0 end-0">
                      <div className="d-flex align-items-center justify-content-center h-100">
                        <i className="text-white fa-solid fa-plus fa-6x"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="img-wrapper rounded-3 overflow-hidden position-relative"
                    onClick={(e) => {
                      showImage(e);
                    }}
                  >
                    <img src={port3} className="w-100 d-block" alt="..." />
                    <div className="overlay position-absolute top-0 bottom-0 start-0 end-0">
                      <div className="d-flex align-items-center justify-content-center h-100">
                        <i className="text-white fa-solid fa-plus fa-6x"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="img-popup position-fixed top-0 bottom-0 start-0 end-0 bg-primary bg-opacity-25 d-none"
            onClick={(e) => {
              hideImage(e);
            }}
          >
            <div className="row h-100 align-content-center justify-content-center">
              <div className="col-md-5">
                <img
                  alt="..."
                  id="selected_Img"
                  className="w-100 d-block"
                  src={port1}
                  onClick={(e) => {
                    e.stopPropagation(); // ✨ prevent closing when clicking image
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
