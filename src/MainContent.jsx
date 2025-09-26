import React from 'react';

function MainContent() {
  return (
    <main>
      <section id="home" className="hero-section">
        <div className="container hero-content">
          <div className="row">
            <div className="col-12">
              <h1 className="animate__animated animate__fadeInDown">Empowering Your Business with <span className="highlight">Innovative Solutions.</span></h1>
              <p className="animate__animated animate__fadeInUp">
                Innovatech Solutions provides cutting-edge technology and services to help businesses thrive in the digital age. Our solutions are designed to be scalable, secure, and user-friendly.
              </p>
              <a href="#features" className="btn btn-primary btn-lg btn-explore">Explore Features</a>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section-padding text-center">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <p className="section-subtitle">
            Our platform offers a range of powerful features designed to streamline your operations and enhance productivity.
          </p>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card animate__animated animate__zoomIn" style={{ animationDelay: '0.2s' }}>
                <div className="feature-icon"><i className="bi bi-shield-check"></i></div>
                <h3 className="card-title">Robust Security</h3>
                <p className="card-text">Protect your data with our advanced security features, including end-to-end encryption and multi-factor authentication.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card animate__animated animate__zoomIn" style={{ animationDelay: '0.4s' }}>
                <div className="feature-icon"><i className="bi bi-people"></i></div>
                <h3 className="card-title">User-Centric Design</h3>
                <p className="card-text">Our intuitive interface ensures a smooth and engaging user experience, minimizing the learning curve.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card animate__animated animate__zoomIn" style={{ animationDelay: '0.6s' }}>
                <div className="feature-icon"><i className="bi bi-graph-up-arrow"></i></div>
                <h3 className="card-title">Efficient Workflows</h3>
                <p className="card-text">Optimize your processes with our automated tools, saving your team valuable time that they can focus on what truly matters.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="section-padding benefits-section text-center">
        <div className="container">
          <h2 className="section-title">Benefits</h2>
          <p className="section-subtitle">
            Experience the tangible benefits of our solutions, from increased efficiency to improved customer satisfaction.
          </p>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="benefit-card animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
                <div className="benefit-image-placeholder"><img src="/i11.png" alt="Enhanced Productivity" /></div>
                <h3 className="card-title">Enhanced Productivity</h3>
                <p className="card-text">Boost your team's productivity with our streamlined tools and automated processes.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="benefit-card animate__animated animate__fadeInUp" style={{ animationDelay: '0.4s' }}>
                <div className="benefit-image-placeholder"><img src="/i2.png" alt="Improved Collaboration" /></div>
                <h3 className="card-title">Improved Collaboration</h3>
                <p className="card-text">Facilitate seamless collaboration among team members with our integrated communication and sharing tools.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="benefit-card animate__animated animate__fadeInUp" style={{ animationDelay: '0.6s' }}>
                <div className="benefit-image-placeholder"><img src="/i3.png" alt="Scalable Growth" /></div>
                <h3 className="card-title">Scalable Growth</h3>
                <p className="card-text">Our solutions are designed to scale with your business, supporting your growth journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="section-padding cta-section animate__animated animate__pulse animate__infinite">
        <div className="container">
          <h2 className="section-title">Ready to Transform Your Business?</h2>
          <p className="section-subtitle">
            Join thousands of businesses already benefiting from Innovatech Solutions. Start your free trial today.
          </p>
          <a href="#contact" className="btn btn-primary btn-lg btn-explore">Get Started</a>
        </div>
      </section>
    </main>
  );
}

export default MainContent;