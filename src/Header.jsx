import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (!isNavCollapsed) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isNavCollapsed]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  
  const handleLinkClick = () => {
    if (!isNavCollapsed) {
      setIsNavCollapsed(true);
    }
  };

  return (
    <header>
      <nav className={`navbar navbar-expand-lg navbar-light bg-white fixed-top ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
        
          <Link className="navbar-brand d-flex align-items-center gap-3" to="/" onClick={handleLinkClick}>
            <img src="/logo.png" alt="InnovaTech Logo" className="brand-logo" />
            <div className="brand-logo-text">
              <div className="brand-name">InnovaTech</div>
              <div className="brand-slogan">Innovating Today, Empowering Tomorrow.</div>
            </div>
          </Link>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            aria-controls="navbarNav" 
            aria-expanded={!isNavCollapsed} 
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
          
          <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav mx-auto gap-3">
              <li className="nav-item" style={{'--i': 1}}><Link className="nav-link" to="/" onClick={handleLinkClick}>Home</Link></li>
              <li className="nav-item" style={{'--i': 2}}><a className="nav-link" href="/#features" onClick={handleLinkClick}>Features</a></li>
              <li className="nav-item" style={{'--i': 3}}><a className="nav-link" href="/#pricing" onClick={handleLinkClick}>Pricing</a></li>
              <li className="nav-item" style={{'--i': 4}}><Link className="nav-link" to="/contact" onClick={handleLinkClick}>Contact</Link></li>
            </ul>
            <div className="get-started-container d-lg-none" style={{'--i': 5}}>
                <a href="#cta" className="btn btn-primary btn-get-started" onClick={handleLinkClick}>
                    Get Started
                </a>
            </div>
          </div>
          
          <a href="#cta" className="btn btn-primary btn-get-started d-none d-lg-block">
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;