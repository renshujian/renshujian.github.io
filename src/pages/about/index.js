import React, { useState } from "react"
import { data, Panels } from "./_index"
import { LangEnum } from "../../enums/lang"
import { LangContext } from "../../contexts/lang"
import { Divider } from "@blueprintjs/core"
import { Avatar } from "../../components/avatar"
import { RadioButtonGroup } from "../../components/radio-button-group"
import style from "./index.module.css"

const langOptions = [
  { value: LangEnum.ZH_CN, label: "中文" },
  { value: LangEnum.EN_US, label: "English" },
  { value: LangEnum.JA_JP, label: "日本語" },
]
const panelOptions = [
  { value: "status" },
  { value: "job1" },
  { value: "profile" },
  { value: "skills" },
  { value: "achievements" },
]

export default function About() {
  const [lang, setLang] = useState(LangEnum.default)
  const [panel, setPanel] = useState(panelOptions[0].value)
  return (
    <LangContext.Provider value={lang}>
      <nav className={style.nav}>
        <Avatar {...data.avatar} />
        <Divider />
        <RadioButtonGroup
          options={langOptions}
          selectedValue={lang}
          onClick={e => setLang(e.target.value)}
          fill={true}
        />
        <Divider />
        <RadioButtonGroup
          options={panelOptions}
          selectedValue={panel}
          onClick={e => setPanel(e.target.value)}
          fill={true}
          vertical={true}
          large={true}
        />
      </nav>
      <Panels panel={panel} />
    </LangContext.Provider>
  )
}
