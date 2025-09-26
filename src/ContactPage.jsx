import React from 'react';

function ContactPage() {
  return (
    <section id="contact-page" className="section-padding contact-page-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0 animate__animated animate__fadeInLeft">
            <h2 className="section-title text-start">Get In Touch</h2>
            <p className="section-subtitle text-start mb-4">
              We're here to help and answer any questions you might have.
              We look forward to hearing from you.
            </p>

            <div className="contact-info">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-wrapper me-3">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div>
                  <h6 className="mb-0">Phone</h6>
                  <p className="mb-0">+1-555-123-4567</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <div className="icon-wrapper me-3">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div>
                  <h6 className="mb-0">Email</h6>
                  <p className="mb-0">support@innovatech.com</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <div className="icon-wrapper me-3">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div>
                  <h6 className="mb-0">Address</h6>
                  <p className="mb-0">123 Innovate Ave, Tech City, 12345</p>
                </div>
              </div>
            </div>

            <div className="map-container mt-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d157544.15655781358!2d-122.58557997970868!3d37.757815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbg!4v1701897000216!5m2!1sen!2sbg"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="San Francisco Map"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-6 animate__animated animate__fadeInRight">
            <div className="contact-form p-4">
              <form>
                <div className="mb-3">
                  <label htmlFor="yourName" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="yourName" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="yourEmail" className="form-label">Your Email</label>
                  <input type="email" className="form-control" id="yourEmail" placeholder="Enter your email" />
                </div>
                <div className="mb-4">
                  <label htmlFor="yourMessage" className="form-label">Your Message</label>
                  <textarea className="form-control" id="yourMessage" rows="5" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100 send-message-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;