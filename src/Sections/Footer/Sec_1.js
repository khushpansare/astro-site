import React from "react";

// Import icons
import YouTube from "../../Assets/footer-icons/youtube-icon.png";
import Twiter from "../../Assets/footer-icons/twitter-icon.png";
import Linkdin from "../../Assets/footer-icons/linkedin-icon.png";
import Instagram from "../../Assets/footer-icons/instagram-icon.png";
import FaceBook from "../../Assets/footer-icons/facebook-icon.png";

function Sec_1() {
  return (
    <>
      <div className="sec-1">
        <div className="content">
          <h2>Anand Agro Care</h2>

          <p>
            Anand Agro Care, Nashik (India) established in the <br />
            year 2009 is one of the well-known enterprise highly <br />{" "}
            engrossed in manufacturing and supplying of Bio <br /> fertilizers,
            Bio pesticides, Bio fungicides, Bio <br />
            nematicides, Herbal extracts, Micronutrients and plant <br /> growth
            pro- moters etc.
          </p>

          <br />
          <div className="icons">
            <img src={YouTube} alt="" />
            <img src={Twiter} alt="" />
            <img src={Linkdin} alt="" />
            <img src={Instagram} alt="" />
            <img src={FaceBook} alt="" />
          </div>
        </div>
        <div className="content list-content">
          <h2>Site Links</h2>
          <div className="list-content">
            <ul>
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">R & D</a>
              </li>
              <li>
                <a href="">Gallary</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Anand Crop Guru</a>
              </li>
              <li>
                <a href="">Co-Marcketing</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Anand Biochem R & D Center</a>
              </li>
              <li>
                <a href="">DealerShip & Distributership</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="content">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="">Delivery and Shipping Policy</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms and Conditions</a>
            </li>
            <li>
              <a href="">Return and Refund Policy</a>
            </li>
            <li>
              <a href="">Helpline no. +91 9405125664</a>
            </li>
            <li>
              <a href="">Email - info@anandagrocare.com</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sec_1;
