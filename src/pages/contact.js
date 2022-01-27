import React from "react"
import Layout from "../components/Layout"
import * as styles from "../../src/styles/contact.module.css"
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope"

const Contact = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Contact me</h1>
        <br />
        <h2>
          If you have any questions, opportunities or would just like to say
          hello <span alt="hand saying hello">&#x270B;</span> then feel free to
          contact me!
        </h2>
        <br />

        <h1 className={styles.email}>
          <FaEnvelope
            className={styles.icon}
            style={{ fill: "var(--clr-dark-complement)" }}
          />
          &nbsp; anabelevelyn@live.com &nbsp;
        </h1>
      </div>
    </Layout>
  )
}

export default Contact
