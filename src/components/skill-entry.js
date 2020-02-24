import React from "react"
import { Tag, Icon, Spinner, Text } from "@blueprintjs/core"
import style from "./skill-entry.module.css"

export function SkillEntry({ icon, name, progress, text }) {
  return (
    <Tag className={style.root} large={true} minimal={true} round={true}>
      <Icon icon={icon} />
      <span>{name}</span>
      <Spinner
        value={progress}
        intent="success"
        size={Spinner.SIZE_SMALL}
      />
      {text && <Text ellipsize={true}>
        {text}
      </Text>}
    </Tag>
  )
}
