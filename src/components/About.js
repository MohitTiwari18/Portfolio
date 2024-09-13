import React from "react";
import "./About.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function About() {
  return (
    <div className="about container-fluid mt-5 mb-5">
      <div className="row">
        <div className="col-md-6">
          <div className="mySecImage">
            <img src="/images/mySecondImage.jpg"></img>
          </div>
        </div>
        <div className="col-md-6">
          <div className="aboutAll">
            <h1>About Me</h1>
            <h5>Hello! i'm Mohit Tiwari</h5>
            <p>
              I have completed my Graduation in Bachelor of Technology from
              Bipin Tripathi Kumaon Institute Of Technology (Formerly Known as
              KEC), Dwarahat located in Uttarakhand district Almora.I have keen
              interest in programming and i have worked on Software Development.
              Now i am building software based on MERN Stack technology.
            </p>
            <div className="icons">
              <a href="https://github.com/MohitTiwari18" target="_blank">
                <i class="bi bi-github"></i>
              </a>
              <a
                href="https://www.instagram.com/mohit_tiwari.18/"
                target="_blank"
              >
                <i class="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100022273749010"
                target="_blank"
              >
                <i class="bi bi-facebook"></i>
              </a>
              <a href="https://wa.me/9012080182" target="_blank">
                <i class="bi bi-whatsapp"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mohit-tiwari-982155227/"
                target="_blank"
              >
                <i class="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* platform html code start from here*/}
      <div className="complete-track container-fluid mt-5 mb-5">
        <div className="tracking ">
          <h1>TRACK ME ON</h1>
          <p>I Solve DSA problems on these platform</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="box">
              <img src="/images/hackerRank.svg"></img>
              <div className="boxes">
                <a
                  href="https://www.hackerrank.com/profile/mohittiwari9933"
                  target="_blank"
                >
                  <h3>HackerRank</h3>
                </a>
                <p>Problem Solving Using DSA</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <img src="/images/githubLogo.svg"></img>
              <div className="boxes">
                <a href="https://github.com/MohitTiwari18" target="_blank">
                  <h3>GitHub</h3>
                </a>
                <p>All My Project Repository</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <img src="/images/codingNinjas.svg"></img>
              <div className="boxes">
                <a
                  href="https://www.naukri.com/code360/profile/mohittiwari"
                  target="_blank"
                >
                  <h3>codingNinjas</h3>
                </a>
                <p>Problem Solving Using DSA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*from here experience html code*/}
      <div className="experience ">
        <h1>EXPERIENCE</h1>
      </div>
      <div className="timeline">
        <div className="timeline-container left-container">
          <img src="/images/collegeLogo.png"></img>
          <div className="text-box">
            <h2>Software Engineer Intern</h2>
            <small>2024 - onward</small>
            <p>
              Currently i am at Automateazy which is a Education & Services Pvt.
              Ltd a software based company where i am working as a Software
              Engineer Intern. i am working in MERN stack technology and
              currently working on frontend technology using React JS along with
              that i used HTML ,CSS, BOOTSTRAP, JS to create webpages.
            </p>
          </div>
        </div>

        <div className="timeline-container right-container">
          <img src="/images/companyLogo.png"></img>
          <div className="text-box">
            <h2>Summer Intern</h2>
            <small>Jun2023 - Aug2023</small>
            <p>
              During My college i had completed 2 months summer internship from
              Colored Cow which is a software based company. where i have worked
              on frontend technology using HTML, CSS, JS and build a Library
              Management System website and i also had done few works on backend
              technology to connect website to the database. for the backend
              technology i used Php and for the database i used MySql.
            </p>
          </div>
        </div>

        <div className="timeline-container left-container">
          <img src="/images/collegeLogo.png"></img>
          <div className="text-box">
            <h2>Bachelor of Technology</h2>
            <small>2020-2024</small>
            <p>
              I did my Graduation from BIPIN TRIPATHI KUMAON INSTITUTE OF
              TECHNOLOGY, Dwarahat formerly known as KEC ( Kumaon engineering
              college) and branch name is Electronic and communication
              engineering. I was interested in programming so i started
              programming from the mid third year later on in final year i
              started building software.
            </p>
          </div>
        </div>

        <div className="timeline-container right-container  ">
          <img src="/images/companyLogo.png"></img>
          <div className="text-box">
            <h2>CSRL Super30</h2>
            <small>2019-2020</small>
            <p>
              CSRL - Centre for Social Responsibility and Leadership is a
              organisation who give education to the student for JEE MAIN and
              ADVANCE examination. I did one year coaching from here after my
              12th exam.
            </p>
          </div>
        </div>
        <div className="timeline-container left-container">
          <img src="/images/collegeLogo.png"></img>
          <div className="text-box">
            <h2>Senior Secondary</h2>
            <small>2018-2019</small>
            <p>
              I had completed my intermediate schooling from KVIC Garur,
              district Bageshwar. I got 81.6% in my 12th board exam. My board
              was Board of School Education Uttarahand.
            </p>
          </div>
        </div>

        <div className="timeline-container right-container  ">
          <img src="/images/companyLogo.png"></img>
          <div className="text-box">
            <h2>Secondary School</h2>
            <small>2016-2017</small>
            <p>
              I had completed my high school from KVIC Garur lacate in Garur,
              district Bageshwar. I got 79.2% in my 10th board exam. My board
              was Board of School Education Uttarahand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
