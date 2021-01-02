import React from "react";
import "../Assets/CSS/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Mudasir Ali</p>
        <p className="footer-subscription-text">
          Hey this just a Prototype to show other people what I can create.
        </p>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <a target="_blank" href="https://www.linkedin.com/in/mudasir-ali-4230511ab/" >Linkedin</a>
            <a target="_blank" href="https://techmudboy.com" >Website</a>
            <a target="_blank" href="https://www.fiverr.com/users/technique969">Fiverr</a>
            <a target="_blank" href="https://twitter.com/Mudasir78169406" to="/">Twitter</a>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              MUD Tech
            </Link>
          </div>
          <small class="website-rights">MUD Tech © 2021</small>
          <div class="social-icons">
            <a
              class="social-icon-link facebook"
              href=""
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </a>
            
            <a
              class="social-icon-link"
              href="https://www.linkedin.com/in/mudasir-ali-4230511ab/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
