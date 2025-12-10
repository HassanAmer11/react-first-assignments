import React from "react";
import style from "./Home.module.css";
import avatar from "../../assets/images/avataaars.svg";
export default function Home() {
  return (
    <>
      <section
        className={`${style.secBg} d-flex flex-column justify-content-center align-items-center`}
      >
        <div className={style.avatar}>
          <img src={avatar} alt="..." className="w-100" />
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center mt-4 gap-2">
          <h2 className="text-uppercase">start Framework</h2>
          <i className="fas fa-star"></i>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </section>
    </>
  );
}
