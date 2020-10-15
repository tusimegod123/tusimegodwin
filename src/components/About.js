import React from "react";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "../about.css";


export default function About() {
  return (
    <motion.div animate={{ rotate: 360 }}
      transition={{ duration: 2 }}>
      <div className="container-fluid" id="first-container-about">
        <div className="row justify-content-center">
          <motion.div className="col-md-10">
            <h3 initial={{ opacity: 100 }}>About me</h3>
            <p className="paragraph">
              A passionate 'Web Developer' with a Master's degree in Electronics
              and Communication engineering who chose passion as a career.
            </p>
            <p className="paragraph">
              A passionate 'Web Developer' with a Master's degree in Electronics
              and Communication engineering who chose passion as a career.
            </p>
            <p className="paragraph">
              A passionate 'Web Developer' with a Master's degree in Electronics
              and Communication engineering who chose passion as a career.
            </p>
            <p id="button-contact">
              <Button variant="primary" href="/contactme">Contact me</Button>
            </p>
          </motion.div>

          <motion.div className="col-md-2"></motion.div>
        </div>
      </div>
    </motion.div>
  );
}
