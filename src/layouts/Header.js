import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';




function Header() {
  const [headerVisible, setHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledDown = prevScrollPos < currentScrollPos;
      
      setHeaderVisible(!isScrolledDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    closeSidebar();
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  // 

  const divRef = useRef();
  useEffect(() => {
    const handleMouseDown = (event) => {
      // Check if the mousedown event target is outside the div
      if (divRef.current && !divRef.current.contains(event.target)) {
        setSidebarOpen(false);// Call the onClose function to handle the event outside the div
      }
    };

    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [setSidebarOpen]);


  return (
    <>
      <header className={`site-header mo-left header ${!headerVisible ? '' : 'is-fixed bg-red'}`} ref={divRef}>
        <div className={`sticky-header  main-bar-wraper
        ] navbar-expand-lg`}>
          <div className={`main-bar clearfix bg-black`}>
            <div className="container clearfix ">
              <div className="logo-header">
                <NavLink to="/" className={headerVisible ? 'logo-dark' : 'logo-light'}>
                  <img src={headerVisible ? "https://i.postimg.cc/VsRQSWmP/logo-facotradee.png" : "https://i.postimg.cc/VsRQSWmP/logo-facotradee.png"} alt="" />
                </NavLink>
              </div>

              <button
                type="button"
                className={`navbar-toggler navicon justify-content-end ${sidebarOpen ? 'open' : 'collapsed'}`}
                onClick={handleSidebarToggle}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div className={`header-nav navbar-collapse collapse justify-content-end ${sidebarOpen ? 'show' : ''}`} id="navbarNavDropdown">
                <div className="logo-header mostion">
                  <NavLink to="#" className="logo-dark">
                    {/* <img style={{width: "200px"}} src={`https://i.postimg.cc/q7YnjMdw/logo.png`} alt="" /> */}
                  </NavLink>
                </div>
                <ul className="nav navbar-nav navbar ">
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => handleNavLinkClick('home')}
                      className={activeLink === 'home' ? 'add' : ''}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about-us"
                      onClick={() => handleNavLinkClick('about')}
                      className={activeLink === 'about' ? 'text-primary' : ''}
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/pricing"
                      onClick={() => handleNavLinkClick('pricing')}
                      className={activeLink === 'pricing' ? 'text-primary' : ''}
                    >
                      Mining
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/staking"
                      onClick={() => handleNavLinkClick('Staking')}
                      className={activeLink === 'Staking' ? 'text-primary' : ''}
                    >
                      Staking
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/faq"
                      onClick={() => handleNavLinkClick('FAQ')}
                      className={activeLink === 'FAQ' ? 'text-primary' : ''}
                    >
                      FAQ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact-us"
                      onClick={() => handleNavLinkClick('Contact Us')}
                      className={activeLink === 'Contact Us' ? 'text-primary' : ''}
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
                <div className="">
                  <div className="extra-cell d-flex gap-1 pt-2 pt-md-2 pt-lg-0 justify-content-center ">
                    <a className="btn btn-outline-primary" target="_blank" rel="noreferrer" href="https://auth.fecotrade.com/login">Login</a>
                    <a className="btn btn-primary btn-gradient btn-shadow" target="_blank" rel="noreferrer" href="https://auth.fecotrade.com/register">Register</a>
                  </div>
                </div>
                <div className="header-bottom">
                  <div className="dz-social-icon">
                    <ul>
                      <li><a target="_blank" className="fab fa-facebook-f" rel="noreferrer" href="https://www.facebook.com/fectorade"></a></li>
                      <li><a target="_blank" className="fab fa-twitter" rel="noreferrer" href="https://twitter.com/"></a></li>
                      <li><a target="_blank" className="fab fa-linkedin-in" rel="noreferrer" href="https://www.linkedin.com/"></a></li>
                      <li><a target="_blank" className="fab fa-instagram" rel="noreferrer" href="https://www.instagram.com/"></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
