import React from "react"
import { Card, ProgressBar } from "@blueprintjs/core"
import style from "./avatar.module.css"

export function Avatar({ src, level: { level, exp } }) {
  return (
    <Card className={style.root} elevation={1}>
      <img src={src} alt="avatar" />
      <br />
      LEVEL: {level}
      <ProgressBar
        animate={false}
        intent="success"
        stripes={false}
        value={exp}
      />
    </Card>
  )
}
