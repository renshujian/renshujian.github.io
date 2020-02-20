import React from "react"
import yamlData from "./data.yaml"
import avatar from "../../../content/assets/avatar.jpg"
import { AttributesPanel } from "../../components/attributes-panel"
import { SkillsPanel } from "../../components/skills-panel"

class Level {
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

export const data = {
  avatar: {
    src: avatar,
    level: new Level(yamlData.birth),
  },
  status: {
    attributes: yamlData.attributes,
    skills: yamlData.skills.filter(skill => skill.scopes.includes("common")),
  },
  job1: {
    attributes: yamlData.jobs[0].attributes,
    skills: yamlData.skills.filter(skill => skill.scopes.includes("software")),
  },
}

function Status({ attributes, skills }) {
  return (
    <main>
      <AttributesPanel data={attributes} />
      <SkillsPanel data={skills} />
    </main>
  )
}

export function Panels({ panel }) {
  switch (panel) {
    case "status": {
      return <Status {...data.status} />
    }
    case "job1": {
      return <Status {...data.job1} />
    }
    case "skills": {
      return <SkillsPanel data={yamlData.skills} />
    }
    default: {
      return <main>Under Construction</main>
    }
  }
}
