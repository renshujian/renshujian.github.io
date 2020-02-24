import React, { useContext } from "react"
import { LangContext } from "../../contexts/lang"
import { useStaticQuery, graphql } from "gatsby"
import { AttributesPanel, SkillsPanel, ProfilePanel } from "../../components"

export class Level {
  static daysInMonth(month) {
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12: {
        return 31
      }
      case 4:
      case 6:
      case 9:
      case 11: {
        return 30
      }
      case 2: {
        // FIXME:
        return 28
      }
      default: {
        return NaN
      }
    }
  }
  constructor(birth) {
    birth = new Date(birth)
    const now = new Date()
    const today = {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate(),
    }
    const birthday = {
      year: birth.getFullYear(),
      month: birth.getMonth() + 1,
      day: birth.getDate(),
    }
    if (today.day < birthday.day) {
      today.month -= 1
      today.day += Level.daysInMonth(today.month)
    }
    if (today.month < birthday.month) {
      today.year -= 1
      today.month += 12
    }
    this.level = today.year - birthday.year
    this.exp = (today.month - birthday.month) / 12
  }
}

export function getJobData(yamlData, index) {
  return {
    attributes: yamlData.jobs[index].attributes,
    skills: yamlData.skills.filter(skill =>
      skill.scopes.includes(yamlData.jobs[index].scope)
    ),
  }
}

export function Status({ attributes, skills }) {
  return (
    <>
      <AttributesPanel data={attributes} />
      <SkillsPanel data={skills} />
    </>
  )
}

export function Profile() {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { sourceInstanceName: { eq: "profile" } }
        sort: { fields: childMdx___frontmatter___page, order: ASC }
      ) {
        nodes {
          childMdx {
            body
            frontmatter {
              lang
              page
              title
            }
          }
        }
      }
    }
  `)
  const lang = useContext(LangContext)
  const pages = data.allFile.nodes
    .map(node => node.childMdx)
    .filter(mdx => mdx.frontmatter.lang === lang)
  return <ProfilePanel pages={pages} />
}
