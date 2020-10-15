import React from "react";
import { motion } from "framer-motion";
import "../about.css";

export default function Contact() {
  return (
    <motion.div
      animate={{ x: 30 }}
      transition={{ ease: "easeOut", duration: 3 }}
    >
      <div className="container" id="first-container-about">
        <div className="row">
          <motion.div className="col-md-6" id="skill1">
            <h3 id="skill1">Tech Skills</h3>
            <p>HTML & CSS</p>
            <p>React Bootstrap, Bootstrap and Material ui</p>
            <p>JavaScript</p>
            <p>React Js</p>
            <p>Node Js, Expresss js</p>
            <p>Mongodb & Mysql database</p>
            <button>Contact me</button>
          </motion.div>
          <motion.div className="col-md-6" id="skill1">
            <h3 id="skill1">Soft Skills</h3>
            <p>Communication</p>
            <p>Critical Thinking</p>
            <p>Creativity</p>
            <button>Contact me</button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
