import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div>
      <footer>
        <div class="footerContainer">
          <div class="title d-flex">
            <h4>Get to Know Us</h4>
            <h4>Connect with Us</h4>
            <h4>Make Money With Us</h4>
            <h4>Let Us help You</h4>
          </div>

          <div class="footer d-flex">
            <div class="div1">
              <a href="#">About Us</a> <br />
              <a href="#">Careers</a> <br />
              <a href="#">press Releases</a> <br />
              <a href="#">More Books</a>
            </div>

            <div class="div2">
              <a href="#">Facebook</a> <br />
              <a href="#">Twitter</a> <br />
              <a href="#">Instagram</a>
            </div>

            <div class="div3">
              <a href="">Sell a Book</a> <br />
              <a href="">Sell under our Accelerator</a> <br />
              <a href="">Protect and Build Your Brand</a> <br />
              <a href="">Book Global Selling</a> <br />
              <a href="">Become an Affiliate</a> <br />
              <a href="">Fulfilment by Bookstore</a>
            </div>

            <div class="div4">
              <a href="">COVID-19 and Amazon</a> <br />
              <a href="">Your Account</a> <br />
              <a href="">Returns Centre</a> <br />
              <a href="">100% Purchase Protection</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
// --transformIgnorePatterns \"node_modules/(?!react-bootstrap)/\"",