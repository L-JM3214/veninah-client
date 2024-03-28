import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function HomeFooter() {
  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link rel="stylesheet" type="text/css" href="App.css" />
      <footer className="footer">
        <div className="content">
          <div className="inner-content">
            <h1>Visit us today!</h1>
            <ul className="icon-text">
              <li>
                <p>
                  We're committed to great food, great coffee, great service, an
                  experience that will make your time with us fabulous.All
                  visuals are serving suggestions only. Prices are quoted in
                  Kenyan Shillings and inclusive of VAT.
                </p>
              </li>
            </ul>
          </div>
          <div className="location">
            <h3>Location📍: Lusengeti Road, Industrial Area, Kenya.</h3>
            <iframe
              width="400"
              height="200"
              title="Chai Vevinah Location"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20368.402692961204!2d36.60943439269823!3d-1.2751081189244636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1f005f0cef55%3A0x54c0965631c80544!2sLusingeti%20Road%2C%20Chai%2C%20Kenya!5e0!3m2!1sen!2s!4v1648478958714!5m2!1sen!2s"
            ></iframe>
          </div>
        </div>
        <div className="social-media">
          <h3 className="follow-us">Follow Us:</h3>
          <ul className="social-icons">
            <li href="" className="social-icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </li>
            <li className="social-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </li>
            <li href="" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </li>
          </ul>
        </div>
        <div className="copyright">
          &copy; 2024 Chai Vevinah. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default HomeFooter;
