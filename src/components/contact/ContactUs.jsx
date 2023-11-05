import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the styles

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Assuming you're using Font Awesome icons
import { faMapMarker, faPhone, faClock } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons
import './ContactUs.css'
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row gy-3">
          <div className="col-lg-3 col-md-6 d-flex">
            <FontAwesomeIcon icon={faMapMarker} className="icon" />
            <div>
              <h4>Address</h4>
              <p>
              Aziznagar, Moinabad Road, Near TS Police Academy <br />
              Hyderabad,Telangana,India-500075<br />
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer-links d-flex">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <div>
              <h4>CONTACT</h4>
              <p>
                <strong>Trust</strong> +91 1234567890<br />
                <strong>Management:</strong>+91 1478523692<br />             
                 </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer-links d-flex">
            <FontAwesomeIcon icon={faClock} className="icon" />
            <div>
              <h4>Opening Hours</h4>
              <p>
                <strong>Mon-Sat: 11AM</strong> - 6PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Follow Us</h4>
            <div className="social-links d-flex">
              <a href="https://twitter.com/KLUniversityHyd" className="twitter"><FaTwitter fontSize={27}/></a>
              <a href="https://www.facebook.com/KLUniversityH" className="facebook"><FaFacebookF fontSize={27}/></a>
              <a href="https://www.instagram.com/kluniversityh" className="instagram"><FaInstagram fontSize={27}/></a>
              <a href="https://www.linkedin.com/school/kluniversity" className="linkedin"><FaLinkedin fontSize={27}/></a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong><span>Aatherya Educational Trust</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="#">K Shiva Prasad Reddy (phno: 9848639990)</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
