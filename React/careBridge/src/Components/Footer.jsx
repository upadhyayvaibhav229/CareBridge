import React from 'react'
import '../App.css'
export const Footer = () => {
  return (
    <footer className="bg-gray w-100 py-1 mt-5">
      <div
        className="container d-flex justify-content-around align-items-center flex-wrap w-100"
      >
        <div className="footer-column col-12 col-md-7 col-sm-12 col-lg-4">
          <div className="footer-logo">
            <img
              src="https://carebridgeaz.com/wp-content/uploads/2024/12/footer-logo-cb.png"
              alt="Care Bridge Logo"
            />
          </div>
          <p className="footer-description">
            Care Bridge Foundation offers <br />
            Medicaid support and assistance <br />
            for Arizona’s low-income aging <br />
            individuals.
          </p>
        </div>

        {/* <!-- Quick Links --> */}
        <div className="footer-links col-12 col-sm-12 col-md-4 col-lg-">
          <h3>Quick Links</h3>
          <ul className="list-unstyled">
            <li><a className="text-decoration-none">Home</a></li>
            <li>
              <a className="text-decoration-none" href="#">What We Do</a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">Request Assistance</a>
            </li>
            <li><a href="#" className="text-decoration-none">Donate</a></li>
          </ul>
        </div>

        {/* <!-- Contact Us --> */}
        <div className="footer-column ms-0 gap-3 mt-md-2">
          <h3 className="fw-medium">Contact Us</h3>
          <div className="text-black">
            <img
              src="https://carebridgeaz.com/wp-content/uploads/2024/12/phone.svg"
              alt="Phone"
              className="me-2 text-black"
            />
            <a className="text-decoration-none text-black" href="#">520-703-8718</a>
          </div>
          <div className="text-black mt-2 d-flex">
            <img
              src="https://carebridgeaz.com/wp-content/uploads/2024/12/email.svg"
              alt="Email"
              className="me-2 text-black"
            />
            <a className="text-black text-decoration-none ms-0" href="#"
              >info@carebridgeaz.com</a
            >
          </div>
        </div>
      </div>
      <hr className="container" />
      {/* <!-- Bottom Section --> */}
      <div className="footer-bottom text-center">
        <p>2024, All rights reserved.</p>
      </div>
    </footer>

  )
}
