import React from "react";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";


import "../nav.css";


const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };


function Navigation() {
   
//   const classes = useStyles();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" id="nav" fixed="top">
        <Navbar.Brand href="/" id="brand">
          Tg
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" id="links"></Nav>

          <Nav>
            <motion.a
              whileHover={{ scale: 1.5 }}
              transition={transition}
              href="/"
              id="links-about"
            >
              Home
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.5 }}
              transition={transition}
              href="/about"
              id="links-about"
            >
              About
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.5 }}
              transition={transition}
              href="/skills"
              id="links-about"
            >
              Skills
            </motion.a>
            <Nav.Link eventKey={2} href="#memes" id="links">
              Portfolio
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" id="links">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
