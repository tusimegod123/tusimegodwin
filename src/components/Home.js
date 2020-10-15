import React from "react";
import { motion } from "framer-motion";
import Typical from "react-typical";
import "../home.css";
// import { Link } from "react-router-dom";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export default function Home() {
  return (
    <>
      <motion.div className="container" id="first-container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="hhhhhhhhhhhh">
              Hello<span>👋</span>, my name is Tusime Godwin!
            </h3>
            <p className="ppppppppp">
              I{" "}
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  "am a Web Developer 👌!",
                  1000,
                  "am a Front End developer 👌!",
                  1000,
                  "am a Marketer by profession  👌!",
                  1000,
                  "am a Christian 👌!",
                  1000,
                  "am a Ugandan 👌!",
                  1000,
                  "can build a website for you 👌!",
                  1000,
                  "can build a system for you 👌!",
                  1000,
                ]}
              />
            </p>
          </div>
          <div className="col-md-12" id="next">
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={transition}
              href="/about"
              id="next"
            >
              {">"}
            </motion.a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
