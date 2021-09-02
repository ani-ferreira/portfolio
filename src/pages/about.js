import React, { useState } from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../../src/styles/about.module.css"

const About = () => {
  const [show, setShow] = useState(false)

  return (
    <Layout>
      <div className={styles.container}>
        <br />
        <div className={styles.description}>
          {" "}
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
              CSS, Javascript and React. And Im in constant search for librarys
              to sharpen my skills.
            </h3>
            <br />
            <h3>
              I find interesting and have experience in the design process as
              well. I design the sites in Figma before coding, do some basic
              wireframes and then prototype it.
            </h3>
            <br />
            <h3>
              I would like to work with a team in order to keep learning and
              sharing ideas.
            </h3>

            <br />
            <button onClick={() => setShow(true)} className={styles.btnshow}>
              +
            </button>
            <div>
              {show ? (
                <h3 className={styles.h3}>
                  I have completed the following courses and obtained
                  certifications: <i>Introduction to Web Development</i> from
                  UCDavis, <i>Diseñando páginas web con Bootstrap 4</i> from
                  Universidad Austral and <i>Responsive web design</i> from the{" "}
                  <Link to={"https://www.freecodecamp.org/anaferreira"}>
                    {" "}
                    FreeCodeCamp
                  </Link>
                  .<br /> When Im interested in learning some new technology I
                  read documentation and watch tutorials about it. Im planning
                  also to join a career on CS next year.
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
