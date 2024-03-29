import React, { useState } from "react";
import Link from "@/utils/ActiveLink";

const Navbar = () => {
  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  // Sidebar Modal
  const [isActiveSidebarModal, setActiveSidebarModal] = useState("false");
  const handleToggleSidebarModal = () => {
    setActiveSidebarModal(!isActiveSidebarModal);
  };

  return (
    <>
      {/* Start Header Area */}
      <header className="main-header-area">
        <div id="navbar" className="navbar-area">
          <div className="main-navbar">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href="/">
                  <a className="navbar-brand">
                    <img src="/images/logo.png" alt="Site logo" />
                  </a>
                </Link>

                <button
                  onClick={toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <Link href="/" activeClassName="active">
                        <a className="nav-link" >
                          Home
                        </a>
                      </Link>
                      {/* <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/" activeClassName="active">
                            <a className="nav-link">Home Demo - 1</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/index-2" activeClassName="active">
                            <a className="nav-link">Home Demo - 2</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/index-3" activeClassName="active">
                            <a className="nav-link">Home Demo - 3</a>
                          </Link>
                        </li>
                      </ul> */}
                    </li>

                    <li className="nav-item">
                    <Link href="/about" activeClassName="active">
                      <a className="nav-link">
                        About Us
                      </a>
                      </Link>
                      {/* <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/about" activeClassName="active">
                            <a className="nav-link">About Style - 1</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/about-2" activeClassName="active">
                            <a className="nav-link">About Style - 2</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/about-3" activeClassName="active">
                            <a className="nav-link">About Style - 3</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/gallery" activeClassName="active">
                            <a className="nav-link">Gallery</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/testimonials" activeClassName="active">
                            <a className="nav-link">Testimonials</a>
                          </Link>
                        </li>
                      </ul> */}
                    </li>

                    <li className="nav-item">
                    <Link href="/services/services-2" activeClassName="active">
                      <a className="nav-link" >
                        Services
                      </a>
                      </Link>
                      {/* <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="#" activeClassName="active">
                            <a className="nav-link">Artificial Intelligence</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="#" activeClassName="active">
                            <a className="nav-link">Robotic Automation</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="#"
                            activeClassName="active"
                          >
                            <a className="nav-link">Data Science Services</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="#"
                            activeClassName="active"
                          >
                            <a className="nav-link">Application Development</a>
                          </Link>
                        </li>
                      </ul> */}
                    </li>

                    {/* <li className="nav-item">
                      <a href="#" className="nav-link">
                        Projects <i className="ri-arrow-down-s-line"></i>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/projects/projects" activeClassName="active">
                            <a className="nav-link">Projects</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/projects/projects-details"
                            activeClassName="active"
                          >
                            <a className="nav-link">Projects Details</a>
                          </Link>
                        </li>
                      </ul>
                    </li> */}

                    {/* <li className="nav-item">
                      <Link href="#" activeClassName="active">
                        <a className="nav-link">
                          Pages <i className="ri-arrow-down-s-line"></i>
                        </a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/pricing" activeClassName="active">
                            <a className="nav-link">Pricing</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/team" activeClassName="active">
                            <a className="nav-link">Team</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/faq" activeClassName="active">
                            <a className="nav-link">FAQ</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            Career <i className="ri-arrow-right-s-line"></i>
                          </a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <Link href="/career/career" activeClassName="active">
                                <a className="nav-link">Career</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link
                                href="/career/career-details"
                                activeClassName="active"
                              >
                                <a className="nav-link">Career Details</a>
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/profile-authentication"
                            activeClassName="active"
                          >
                            <a className="nav-link">Profile Authentication</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/membership-levels"
                            activeClassName="active"
                          >
                            <a className="nav-link">Membership Levels</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/terms-of-service"
                            activeClassName="active"
                          >
                            <a className="nav-link">Terms of Service</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/privacy-policy" activeClassName="active">
                            <a className="nav-link">Privacy Policy</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/coming-soon" activeClassName="active">
                            <a className="nav-link">Coming Soon</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/404" activeClassName="active">
                            <a className="nav-link">404 Error Page</a>
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                    
                    <li className="nav-item">
                    <Link href="/blog/blog" activeClassName="active"> 
                      <a className="nav-link">
                        Blogs
                      </a>
                      </Link>
                      </li>
                   

                    {/* <li className="nav-item">
                      <Link href="/pricing" activeClassName="active">
                        <a className="nav-link">Pricing</a>
                      </Link>
                    </li> */}

                    <li className="nav-item">
                      <Link href="/contact" activeClassName="active">
                        <a className="nav-link">Contact</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="others-options d-flex align-items-center">
                  <div className="option-item">
                    <i
                      className="search-btn ri-search-line"
                      onClick={handleToggleSearchModal}
                    ></i>
                  </div>

                  <div className="option-item">
                    <div
                      className="side-menu-btn"
                      onClick={handleToggleSidebarModal}
                    >
                      <i className="ri-bar-chart-horizontal-line"></i>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* End Header Area */}

      {/* Search Form */}
      <div
        className={`search-overlay ${
          isActiveSearchModal ? "" : "search-overlay-active"
        }`}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>

            <div
              className="search-overlay-close"
              onClick={handleToggleSearchModal}
            >
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>

            <div className="search-overlay-form">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="ri-search-2-line"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Search Form */}

      {/* Sidebar Modal */}
      <div className={`sidebarModal modal right fade ${isActiveSidebarModal ? "" : "show"}`}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <button type="button" className="close" onClick={handleToggleSidebarModal}>
              <i className="ri-close-line"></i>
            </button>

            <div className="modal-body">
              <Link href="/">
                <a>
                  <img
                    src="/images/blue_logo.png"
                    alt="image"
                  />
                </a>
              </Link>
              <div className="sidebar-content">
                <h3>About Us</h3>
                <p>
                Innoclique is a seasoned product engineering company, 
                experiences building solutions with end-to-end software 
                product engineering services. 
                </p>

                <div className="sidebar-btn">
                  <Link href="/contact">
                    <a className="default-btn default-btn1">
                      Let’s Talk
                    </a>
                  </Link>
                </div>
              </div>

              <div className="sidebar-contact-info">
                <h3>Contact Information</h3>

                <ul className="info-list">
                  <li>
                    <i className="ri-phone-fill"></i>{" "}
                    <a href="tel:9849070179">+91 9849070179</a>
                  </li>

                  <li>
                    <i className="ri-mail-line"></i>{" "}
                    <a href="mailto:info@innoclique.com">info@innoclique.com</a>
                  </li>

                  <li>
                    <i className="ri-map-pin-line"></i> Co-Working Space, 2-91/12/4 NR, Plot no:4, Doc Bhavan, 5th floor, Kondapur, Hyderabad - 500081
                  </li>
                </ul>
              </div>

              <ul className="sidebar-social-list">
              <li>
                <a href="https://www.linkedin.com/company/innoclique-congitive-technologies-pvt-ltd/posts/?feedView=all" target="_blank" rel="noreferrer">
                  <i class="ri-linkedin-fill"></i>
                </a>
              </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Sidebar Modal */}
    </>
  );
};

export default Navbar;
