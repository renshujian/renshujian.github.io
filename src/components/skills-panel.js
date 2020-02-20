import React, { useContext } from "react"
import { LangContext } from "../contexts/lang"
import { Card } from "@blueprintjs/core"
import { SkillEntry } from "./skill-entry"
import style from "./skills-panel.module.css"

export function SkillsPanel({ data }) {
  const lang = useContext(LangContext)
  return (
    <Card className={style.root}>
      {data.map(({ name, icon, progress, details }) => (
        <SkillEntry
          key={name[lang]}
          icon={icon}
          name={name[lang]}
          progress={progress}
          text={details?.[lang]}
        />
      ))}
    </Card>
  )
}
