import React, { useState } from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../../src/styles/about.module.css"
import { BsBook } from "@react-icons/all-files/bs/BsBook"

const About = () => {
  const [show, setShow] = useState(false)

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
              I'm a self-taught web developer. I enjoy the process of creating a
              functional site with a good experience for users. I code in HTML,
              CSS, Javascript. React.js is my favourite framework and I´m in
              constant search for librarys to sharpen my skills.
            </h3>
            <br />
            <h3>
              I find interesting the design process as well. I design the sites
              in Figma, do some basic wireframes and prototyping before coding.
            </h3>
            <br />
            <h3>
              I would like to work with a team in order to keep learning and
              share ideas.
            </h3>

            <br />
            <button onClick={() => setShow(true)} className={styles.btnshow}>
              +
            </button>
            <div>
              {show ? (
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
                      <BsBook className={styles.icon} /> "Diseñando páginas web
                      con Bootstrap 4" - Universidad Austral
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
              ) : null}
            </div>
          </div>
        </div>
        <div className={styles.skills}>
          <h1>Skills</h1>
          <br />
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>React</p>
          <p>Material UI</p>
          <p>Styled components</p>
          <p>Gatsby.js</p>
          <p>GraphQL</p>
          <p>Git & Github</p>
          <p>Figma</p>
        </div>
      </div>
    </Layout>
  )
}

export default About
