import React from "react";
import { motion } from "framer-motion";
import "../about.css";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export default function Skills() {
 
  return (
    <motion.div
      animate={{ x: 10 }}
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
            <p>
              Visit my{" "}
              <a href="https://www.linkedin.com/in/tusime-godwin-91211a84/">
                linkedin profile
              </a>{" "}
              for more details
            </p>
          </motion.div>
          <motion.div className="col-md-6" id="skill1">
            <h3 id="skill1">Soft Skills</h3>
            <p>Communication</p>
            <p>Critical Thinking</p>
            <p>Creativity</p>
            <p>
              Visit my{" "}
              <a href="https://www.linkedin.com/in/tusime-godwin-91211a84/">
                linkedin profile
              </a>{" "}
              for more details
            </p>
          </motion.div>
        </div>
      </div>
      <div className="container">
        <motion.div className="row">
          <div className="col-md-12" id="next14">
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={transition}
              href="/about"
              id="next"
            >
              {"<"}
            </motion.a>{" "}
            &nbsp;
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={transition}
              href="/portfolio"
              id="next"
            >
              {">"}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
