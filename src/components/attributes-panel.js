import React, { useContext } from "react"
import { LangContext } from "../contexts/lang"
import { Card } from "@blueprintjs/core"

export function AttributesPanel({ data }) {
  const lang = useContext(LangContext)
  return (
    <Card>
      {data.map(({ name, value }) => (
        <div>
          {name[lang]}: {value}
        </div>
      ))}
    </Card>
  )
}
