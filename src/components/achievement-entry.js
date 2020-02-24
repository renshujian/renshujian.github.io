import React from "react"
import { Card, Icon, Text } from "@blueprintjs/core"
import style from "./achievement-entry.module.css"

export function AchievementEntry({ name, date, text }) {
  return (
    <Card className={style.root}>
      <Icon icon="badge" iconSize={Icon.SIZE_LARGE} />
      <span className={style.name}>{name}</span>
      <span>{date}</span>
      {text && <Text ellipsize={true}>{text}</Text>}
    </Card>
  )
}
