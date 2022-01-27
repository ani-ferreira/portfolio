import React, { useState } from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../../src/styles/about.module.css"
import { BsBook } from "@react-icons/all-files/bs/BsBook"

const About = () => {
  const [show, setShow] = useState(false)

  let showMoreBtn = ""
  if (show === true) {
    showMoreBtn = "-"
  } else {
    showMoreBtn = "+"
  }

  return (
    <Layout>
      <div className={styles.container}>
        <br />
        <div className={styles.description}>
          <StaticImage
            alt="A photo of me"
            src="../images/perfil.jpg"
            className={styles.img}
          />
          <div className={styles.descriptiontext}>
            <h1>About me</h1>
            <h3>
              My name is Ana, I’m 27 and live in Buenos Aires.
              <br />
              <br />
              My interest in web development started back in 2019 when I
              discovered javascript and I haven’t stopped coding JS lines since
              then. I´ve also been adding along different technologies to my
              stack.
              <br />
              <br />
              My projects are mainly in React, I´ve been diving deeper into
              React itself as well as libraries and tools surrounding it.
              However, I dabbled in Gatsby.js and GraphQL to make this site
              &nbsp;
              <span role="img" alt="smiley-face">
                😃
              </span>
              <br />
              <br />
              I find interesting the design process as well. Sometimes I design
              the sites in Figma, do some basic wireframes and prototyping
              before coding.
              <br />
              <br />I would like to work with a team in order to keep learning
              and sharing ideas.
            </h3>
            <br />
            <button onClick={() => setShow(!show)} className={styles.btnshow}>
              {showMoreBtn}
            </button>
            <div>
              {show ? (
                <div className={styles.fadeIn}>
                  <h3 className={styles.more}>
                    I have completed the following courses and obtained
                    certifications:
                    <br /> <br />
                    <ul>
                      <li>
                        <BsBook className={styles.icon} />
                        "Introduction to Web Development" - UCDavis
                      </li>
                      <li>
                        <BsBook className={styles.icon} /> "Diseñando páginas
                        web con Bootstrap 4" - Universidad Austral
                      </li>
                      <li>
                        <BsBook className={styles.icon} />
                        "Responsive web design" -
                        <Link to={"https://www.freecodecamp.org/anaferreira"}>
                          FreeCodeCamp
                        </Link>
                      </li>
                      <li>
                        <BsBook className={styles.icon} />
                        "React - The complete guide" - Udemy
                      </li>
                    </ul>
                    <br />
                    Currently, I´m studing Tecnicatura Universitaria en
                    Programación Informática at Universidad de Quilmes.
                  </h3>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className={styles.skills}>
          <h1>Tools & Technologies</h1>
          <br />
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>React</p>
          <p>Material UI</p>
          <p>Styled components</p>
          <p>Gatsby.js</p>
          <p>Git & Github</p>
          <p>Figma</p>
        </div>
      </div>
    </Layout>
  )
}

export default About
