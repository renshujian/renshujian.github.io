import React from "react"
import { ProgressBar } from "@blueprintjs/core"
import style from "./attribute-entry.module.css"

export function AttributeEntry({ name, value }) {
  return (
    <div>
      <div className={style.label}>
        {name}: {value}
      </div>
      <ProgressBar
        animate={false}
        intent="success"
        stripes={false}
        value={value / 10000}
      />
    </div>
  )
}
