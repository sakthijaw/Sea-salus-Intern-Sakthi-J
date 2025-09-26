import React from 'react';

function Footer() {
  return (
    <footer id="contact" className="footer animate__animated animate__fadeInUp">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-4 footer-brand-info d-flex align-items-center justify-content-center justify-content-lg-start gap-3">
            <img src="/logo.png" alt="InnovaTech Logo" className="brand-logo" />
            <div>
              <div className="brand-name">InnovaTech</div>
              <div className="brand-slogan">Innovating Today, Empowering Tomorrow.</div>
            </div>
          </div>
          <div className="col-lg-4 text-center footer-links">
            <a href="#!">Privacy Policy</a>
            <a href="#!">Terms of Service</a>
            <a href="#!">Contact Us</a>
          </div>
          <div className="col-lg-4 text-center text-lg-end social-icons">
            <a href="#!"><i className="bi bi-facebook"></i></a>
            <a href="#!"><i className="bi bi-twitter"></i></a>
            <a href="#!"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer-copyright">
              © 2024 Innovatech Solutions. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;