import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="bodys container-fluid">
      <div className="row">
        <div className="contact-heading mt-5 mb-5">
          <h1>Wanna Talk To Me?</h1>
        </div>
        <div className=" contact-content-left col-md-6 mb-5 ">
          <h2>Contact me</h2>
          <p>Bageshwar, Uttarakhand, India</p>
          <p>mohittiwari9933@gmail.com</p>
          <strong>(+91)9012080182</strong>
          <div className="contact-icons">
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

        <div className="contact-content-right col-md-6 mb-5">
          <form>
            <div class="form-group">
              <input
                type="name"
                class="form-control"
                id="exampleInputName1"
                placeholder="Name"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <textarea rows="4" cols="50" name="comment" form="usrform">
                Message
              </textarea>
            </div>
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Are You a Engineer
              </label>
            </div>
            <button type="submit" class="contact-btns btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
