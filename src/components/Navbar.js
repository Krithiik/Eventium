import { React, useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-scroll";

const styles = {
  scrolled: {
    backgroundColor: "#4449",
  },
};

export default withStyles(styles)(function Appbar({ classes }) {
  return (
    <div>
      <nav
        id="mainNavbar"
        className={`navbar fixed-top navbar-expand-lg navbar-dark p-4 ${classes.scrolled}`}
      >
        <div className="container px-5">
          <a className="navbar-brand" href="#">
            EVENTIUM
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
              <li className="nav-item ">
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about" spy={true} smooth={true}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="speakers"
                  spy={true}
                  smooth={true}
                >
                  Speakers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="agenda" spy={true} smooth={true}>
                  Agenda
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="partners"
                  spy={true}
                  smooth={true}
                >
                  Partners
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="tickets"
                  spy={true}
                  smooth={true}
                >
                  Tickets
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="blog" spy={true} smooth={true}>
                  Blog
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className="nav-link"
                  to="contacts"
                  spy={true}
                  smooth={true}
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
});
