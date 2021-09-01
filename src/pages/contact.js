import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import * as styles from "../../src/styles/contact.module.css"
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"

const Contact = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Contact me</h1>
        <br />
        <h2>
          If you are interested in working, or just talking to me,{" "}
          <Link to=""> get in touch!</Link>
        </h2>
        <div>
          <Link to="/" className={styles.btn}>
            <FaEnvelope
              className={styles.icon}
              style={{ fill: "var(--clr-dark-complement)" }}
            />
            Email
          </Link>
          &nbsp; &nbsp;
          <Link to="/" className={styles.btn}>
            <FaLinkedin
              className={styles.icon}
              style={{ fill: "var(--clr-dark-complement)" }}
            />
            LinkedIn
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
