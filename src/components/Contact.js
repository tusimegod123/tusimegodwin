import React from "react";
import { motion } from "framer-motion";
import { Form, Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "../about.css";

export default function Contact() {
  return (
    <motion.div
      animate={{ x: 5 }}
      transition={{ ease: "easeOut", duration: 3 }}
    >
      <div className="container">
        <div className="row">
          <motion.div className="col-md-12">
            <h3>Let's Talk</h3>
            <p className="paragraph">
              I am interested in new opportunities – incredibly ambitious or
              large projects. However, if you have other requests or questions,
              don’t hesitate to contact me using the below form either.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <motion.div className="col-md-6" id="contact">
            <h3 id="skill1">Contact info:</h3>
            <span>
              <p>
                Telephone:{" "}
                <a href="tel:+256701398916" id="phone-link">
                  {" "}
                  +2567013938916
                </a>
              </p>
            </span>
            <p>
              Email:{""}
              &nbsp; &nbsp;
              <a href="mailto: tusimegodwinmarch2013@gmail.com">
                {" "}
                Click here to send an email
              </a>
            </p>

            <p>Address:</p>
            <p>Kampala, Uganda</p>
          </motion.div>

          <motion.div
            // animate={{ x: 10 }}
            transition={{ ease: "easeOut", duration: 5 }}
            className="col-md-6"
            id="contact"
          >
            <h3 id="skill1">Direct Message:</h3>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label id="form-label">Name</Form.Label>
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label id="form-label">Email</Form.Label>
                  <Form.Control type="email" placeholder="Your email" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridAddress1">
                <Form.Label id="form-label">Subject</Form.Label>
                <Form.Control placeholder="Subject" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label id="form-label">Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
