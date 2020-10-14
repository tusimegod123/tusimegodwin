import React from "react";
import { motion } from "framer-motion";
import Typical from "react-typical";
import "../home.css";
// import { Link } from "react-router-dom";


export default function Home() {
  return (
    <>
      <motion.div
       
        className="container"
        id="first-container"
      >
        <div className="row">
          <div className="col-md-12">
            <h3 className="hhhhhhhhhhhh">
              Hello<span>👋</span>, my name is Tusime Godwin!
            </h3>
            <p className="ppppppppp">
              I am a{" "}
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  "Web Developer 👌!",
                  1000,
                  "Front End developer 👌!",
                  1000,
                  "Marketer by profession  👌!",
                  1000,
                  "Christian 👌!",
                  1000,
                  "Ugandan 👌!",
                  1000,
                ]}
              />
            </p>
{/*             
            <Link to="/about">
              <motion.button
                whileHover={{ scale:1.1, backgroundColor:"red" }}
                transition={transition}
              >
                Click
              </motion.button>
            </Link> */}
          </div>
        </div>
      </motion.div>
    </>
  );
}
