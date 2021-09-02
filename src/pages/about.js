import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../../src/styles/about.module.css"

const About = () => {
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
          </div>
        </div>
        <br />

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
