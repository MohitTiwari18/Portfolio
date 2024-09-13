import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="homeBody container-fluid ">
      <div className="row">
        <div className="col-md-6">
          <div className="myImage">
            <img src="/images/menimage.png" alt="Profile" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="about-me">
            <h6>Mohit Tiwari</h6>
            <h1>
              I’m a Software <span>Developer</span>
            </h1>
            <p>
              I have completed my under-graduation from BTKIT Dwarahat and I
              have learnt how to create websites and software. Currently, I am
              focusing on languages and frameworks for the expertise in MERN
              stack technology .
            </p>
            <button className="DownloadCV-btn ">
              <a href="/Mohit_Tiwari_Resume.pdf"> DOWNLOAD CV</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
