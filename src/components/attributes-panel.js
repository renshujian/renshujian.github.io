import React, { useContext } from "react"
import { LangContext } from "../contexts/lang"
import { Card } from "@blueprintjs/core"
import { AttributeEntry } from "./attribute-entry"
import style from "./attributes-panel.module.css"

export function AttributesPanel({ data }) {
  const lang = useContext(LangContext)
  return (
    <Card className={style.root}>
      {data.map(({ name, value }) => (
        <AttributeEntry key={name[lang]} name={name[lang]} value={value} />
      ))}
    </Card>
  )
}
