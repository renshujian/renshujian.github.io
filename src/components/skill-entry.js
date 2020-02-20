import React from "react"
import { Card, Icon, Spinner, Text } from "@blueprintjs/core"
import style from "./skill-entry.module.css"

export function SkillEntry({ icon, name, progress, text }) {
  return (
    <Card>
      <Icon icon={icon} iconSize={Icon.SIZE_LARGE} />
      <span>{name}</span>
      <Spinner
        className={style.spinner}
        value={progress}
        intent="success"
        size={Spinner.SIZE_SMALL}
      />
      <Text tagName="span" ellipsize={true}>
        {text}
      </Text>
    </Card>
  )
}
