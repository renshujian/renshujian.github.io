import React, { useContext } from "react"
import { LangContext } from "../contexts/lang"
import { Card } from "@blueprintjs/core"
import { AchievementEntry } from "./achievement-entry"

export function AchievementsPanel({ data }) {
  const lang = useContext(LangContext)
  return (
    <Card>
      {data.map(({ name, date, details }) => (
        <AchievementEntry
          key={name[lang]}
          name={name[lang]}
          date={new Date(date).toLocaleDateString(lang)}
          text={details?.[lang]}
        />
      ))}
    </Card>
  )
}
