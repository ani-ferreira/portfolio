import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h1>
            Hi, my name is Ani. <br /> I design and{" "}
            <span>develop websites</span> for entrepreneurs and professionals.
          </h1>
          <p>
            I would like to join a team. Look around this site to know me better
            and contact me if you'd like to!
          </p>
          <Link className={styles.btn} to="/contact">
            Contact me
          </Link>
          &nbsp; &nbsp;
          <Link className={styles.btn} to="/projects">
            See my projects
          </Link>
        </div>
      </section>
    </Layout>
  )
}
