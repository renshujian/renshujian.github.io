import React, { useState } from "react"
import { data, Panels, langOptions, panelOptions } from "./_index"
import { LangEnum } from "../../enums/lang"
import { LangContext } from "../../contexts/lang"
import { Divider, Dialog } from "@blueprintjs/core"
import { Avatar, RadioButtonGroup } from "../../components"
import style from "./index.module.css"
import Landing from "../index"
import { navigate } from "gatsby"

export default function About() {
  const [lang, setLang] = useState(LangEnum.default)
  const [panel, setPanel] = useState(panelOptions[lang][0].value)
  return (
    <LangContext.Provider value={lang}>
      <Landing />
      <Dialog
        className={style.dialog}
        isOpen={true}
        onClose={() => navigate("/")}
      >
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
          <div className={style.menu}>
            <RadioButtonGroup
              options={panelOptions[lang]}
              selectedValue={panel}
              onClick={e => setPanel(e.target.value)}
              fill={true}
              vertical={true}
            />
          </div>
        </nav>
        <main className={style.main}>
          <Panels panel={panel} />
        </main>
      </Dialog>
    </LangContext.Provider>
  )
}
