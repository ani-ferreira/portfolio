import React from "react"
import Layout from "../../components/Layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import * as styles from "../../styles/project.module.css"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaExternalLinkAlt } from "@react-icons/all-files/fa/FaExternalLinkAlt"

export default function allProjects({ data }) {
  const projects = data.allMarkdownRemark.nodes

  const projectLinkData = projects.map(project => (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardimg}>
          <GatsbyImage
            image={project.frontmatter.fullImg.childImageSharp.gatsbyImageData}
          />
        </div>
        <div className={styles.cardinfo}>
          <h2 className={styles.projecttitle}>{project.frontmatter.title}</h2>
          <p>{project.frontmatter.description}</p>
          <p className={styles.stack}>{project.frontmatter.stack}</p>
          <Link to={project.frontmatter.app} className={styles.btn}>
            <FaExternalLinkAlt /> Visit site
          </Link>
          &nbsp; &nbsp;
          <Link to={project.frontmatter.repo} className={styles.btn}>
            <FaGithub className={styles.gicon} />
            Github
          </Link>
        </div>
      </div>
    </div>
  ))

  return (
    <Layout>
      <div>
        <h1 className={styles.projectstitle}>Projects</h1>
        <section>{projectLinkData}</section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          fullImg {
            childImageSharp {
              gatsbyImageData
            }
          }
          app
          description
          title
          repo
          imageAlt
          stack
          thumbImg
        }
      }
    }
  }
`
