import React from 'react';

import './footer.scss'; // Import the SCSS file

const Footer = () => {
  return (
    <div class="footer">
      <div class="content">
        <div class="services">
          <h4>CATEGORIES</h4>
          <p><a href="#">Web builder</a></p>
          <p><a href="#">Hosting</a></p>
          <p><a href="#">Data Center</a></p>
          <p><a href="#">Robotic-Automation</a></p>
        </div>
        <div class="social-media">
          <h4>CONTACT</h4>
          <p>
            <a href="#"
              ><i class="fab fa-linkedin"></i> Contact</a
            >
          </p>
          <p>
            <a href="#"
              ><i class="fab fa-twitter"></i> Privacy Policy</a
            >
          </p>
          <p>
            <a href="https://github.com/farazc60"
              ><i class="fab fa-github"></i> Terms Of Service</a
            >
          </p>
          <p>
            <a href="https://www.facebook.com/codewithfaraz"
              ><i class="fab fa-facebook"></i> Categories</a
            >
          </p>
          <p>
            <a href="https://www.instagram.com/codewithfaraz"
              ><i class="fab fa-instagram"></i> About</a
            >
          </p>
        </div>
        <select name="country" id="cars" class="links bg-black">
        <option value="United States">United States</option>
        <option value="India">India</option>
        </select>
      </div>
    </div>
  );
};

export default Footer;

