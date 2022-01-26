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
            <span>
              Hi, my name is Ana. <br />
              I'm a self-taught web developer. <br />I enjoy the process of
              creating functional web applications with a good experience for
              users.
            </span>
          </h1>
          <h3>
            Look around this site to know me better and contact me if you'd like
            to!
          </h3>
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
