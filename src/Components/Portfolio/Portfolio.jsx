import React, { useState } from "react";
import port1 from "../../assets/images/poert1.png";
import port2 from "../../assets/images/port2.png";
import port3 from "../../assets/images/port3.png";

export default function Portfolio() {
  const [imgHolder, setImgHolder] = useState("");
  const [isOpen, setOpen] = useState(false);

  function showImage(imgSrc) {
    setImgHolder(imgSrc);
    setOpen(true);
  }
  function hideImage() {
    setOpen(false);
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
                  onClick={() => {
                    showImage(port1);
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
                  onClick={() => {
                    showImage(port2);
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
                  onClick={() => {
                    showImage(port3);
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
                  onClick={() => {
                    showImage(port1);
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
                  onClick={() => {
                    showImage(port2);
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
                  onClick={() => {
                    showImage(port3);
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
          className={`img-popup position-fixed top-0 bottom-0 start-0 end-0 bg-primary bg-opacity-25 ${
            !isOpen && "d-none"
          }`}
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
                src={imgHolder}
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
