import React from "react";
import "./Project.css";

export default function Project() {
  return (
    <div class="projects container">
      <div class="row gy-4 justify-content-between features-item mt-5">
        <div class=" imgSize col-lg-6">
          <a href="https://mohittiwari.netlify.app/" target="_blank">
            <img src="/images/Project1.png" class="img-fluid" alt="" />
          </a>
        </div>

        <div class="col-lg-5 d-flex align-items-center ">
          <div class="contenting">
            <h3>Library Management System</h3>
            <p>
              Created a Library Management System website using frontend
              Technology HTML, CSS, JS. I also used CSS based framework
              BOOTSTRAP to style the Website layout.
            </p>
            <a
              href="https://github.com/MohitTiwari18/Library-Management-System"
              class="btn more-btn"
              target="_blank"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div class="row gy-4 justify-content-between features-item mt-5">
        <div
          class="col-lg-5 d-flex align-items-center order-2 order-lg-1 "
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="contenting">
            <h3>Bootstrap Based Webpage</h3>
            <p>
              To understand the concept of BOOTSTRAP i created this page which
              completely based on frontend using HTML, CSS, BOOTSTRAP.
            </p>

            <a
              href="https://github.com/MohitTiwari18/Bootstrap-Based-Webpage"
              class="btn more-btn"
              target="_blank"
            >
              Learn More
            </a>
          </div>
        </div>

        <div
          class="imgSize col-lg-6 order-1 order-lg-2 "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <a href="https://mohittiwari.netlify.app/" target="_blank">
            <img src="/images/Project2.png" class="img-fluid" alt="" />
          </a>
        </div>
      </div>
      <div class="row gy-4 justify-content-between features-item mt-5">
        <div class=" imgSize col-lg-6 ">
          <a href="https://mohittiwari.netlify.app/" target="_blank">
            <img src="/images/Project3.png" class="img-fluid" alt="" />
          </a>
        </div>

        <div class="col-lg-5 d-flex align-items-center">
          <div class="contenting">
            <h3>CollegeChalo Website Frontpage</h3>
            <p>
              As a practice of frontend Technology for the website design i was
              given this page to design for the perfection in HTML, CSS,
              BOOTSTRAP topics.
            </p>
            <a
              href="https://github.com/MohitTiwari18/CollegeChalo-website-frontpage"
              class="btn more-btn"
              target="_blank"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div class="row gy-4 justify-content-between features-item mt-5">
        <div
          class="col-lg-5 d-flex align-items-center order-2 order-lg-1 "
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="contenting">
            <h3>Nulift NGO Website</h3>
            <p>
              This is a webpage of nulife NGO which is created by me using
              React, React is a frontend javascript library for building user
              interfaces based on components.
            </p>

            <a
              href="https://github.com/MohitTiwari18/Nulife-ngo-website"
              class="btn more-btn"
              target="_blank"
            >
              Learn More
            </a>
          </div>
        </div>

        <div
          class="imgSize col-lg-6 order-1 order-lg-2 "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <a href="https://mohittiwari.netlify.app/" target="_blank">
            <img src="/images/project4.png " class="img-fluid" alt="" />
          </a>
        </div>
      </div>
      <div class="row gy-4 justify-content-between features-item mt-5 mb-5">
        <div class=" imgSize col-lg-6 ">
          <a href="https://mohittiwari.netlify.app/" target="_blank">
            <img src="/images/Project5.png" class="img-fluid" alt="" />
          </a>
        </div>

        <div class="col-lg-5 d-flex align-items-center ">
          <div class="contenting">
            <h3>My Portfolio</h3>
            <p>
              This is my portfolio for showcasing about my education, skills,
              projecs and contact. I am building this project using MERN STACK
              technology, for now i am working on frontend of this project later
              on will work in backend also.
            </p>
            <a
              href="https://github.com/MohitTiwari18/my-portfolio"
              class="btn more-btn"
              target="_blank"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
