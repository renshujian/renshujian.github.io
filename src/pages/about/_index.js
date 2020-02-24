import React from "react"
import yamlData from "./data.yaml"
import avatar from "../../../content/assets/avatar.jpg"
import { LangEnum } from "../../enums/lang"
import * as utils from "./_utils"
import { SkillsPanel, AchievementsPanel } from "../../components"

// TODO: reorganize when there are more panels
const PANEL = {
  STATUS: "status",
  PROFILE: "profile",
  SKILLS: "skills",
  ACHIEVEMENTS: "achievements",
  JOB1: "job1",
  JOB2: "job2",
  JOB3: "job3",
}

export const langOptions = [
  { value: LangEnum.ZH_CN, label: "中文" },
  { value: LangEnum.EN_US, label: "English" },
  { value: LangEnum.JA_JP, label: "日本語" },
]

export const panelOptions = {
  [LangEnum.ZH_CN]: [
    { value: PANEL.STATUS, label: "基本属性" },
    { value: PANEL.JOB1, label: "职：软件工程师" },
    { value: PANEL.JOB2, label: "职：魔法使" },
    { value: PANEL.JOB3, label: "职：炼金术士" },
    { value: PANEL.PROFILE, label: "人物档案" },
    { value: PANEL.SKILLS, label: "持有技能" },
    { value: PANEL.ACHIEVEMENTS, label: "成就一览" },
  ],
  [LangEnum.EN_US]: [
    { value: PANEL.STATUS, label: "STATUS" },
    { value: PANEL.JOB1, label: "JOB: SE" },
    { value: PANEL.JOB2, label: "JOB: OTAKU" },
    { value: PANEL.JOB3, label: "JOB: CHEMIST" },
    { value: PANEL.PROFILE, label: "PROFILE" },
    { value: PANEL.SKILLS, label: "SKILLS" },
    { value: PANEL.ACHIEVEMENTS, label: "ACHIEVEMENTS" },
  ],
  [LangEnum.JA_JP]: [
    { value: PANEL.STATUS, label: "ステータス" },
    { value: PANEL.JOB1, label: "ジョブ・ソフトウェアエンジニア" },
    { value: PANEL.JOB2, label: "ジョブ・オタク" },
    { value: PANEL.JOB3, label: "ジョブ・化学者" },
    { value: PANEL.PROFILE, label: "プロファイル" },
    { value: PANEL.SKILLS, label: "スキル" },
    { value: PANEL.ACHIEVEMENTS, label: "アチーブメント" },
  ],
}

export const data = {
  avatar: {
    src: avatar,
    level: new utils.Level(yamlData.birth),
  },
  [PANEL.STATUS]: {
    attributes: yamlData.attributes,
    skills: yamlData.skills.filter(skill => skill.scopes.includes("common")),
  },
  [PANEL.JOB1]: utils.getJobData(yamlData, 0),
  [PANEL.JOB2]: utils.getJobData(yamlData, 1),
  [PANEL.JOB3]: utils.getJobData(yamlData, 2),
}

export function Panels({ panel }) {
  switch (panel) {
    case PANEL.STATUS:
    case PANEL.JOB1:
    case PANEL.JOB2:
    case PANEL.JOB3: {
      return <utils.Status {...data[panel]} />
    }
    case PANEL.PROFILE: {
      return <utils.Profile />
    }
    case PANEL.SKILLS: {
      return <SkillsPanel data={yamlData.skills} />
    }
    case PANEL.ACHIEVEMENTS: {
      return <AchievementsPanel data={yamlData.achievements} />
    }
    default: {
      return <strong>Under Construction</strong>
    }
  }
}
