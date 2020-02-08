import React from "react"
import { Button, Classes, H2 } from "@blueprintjs/core"
import style from "./index.module.css"
import { navigate } from "gatsby"

export default function landing() {
  return (
    <main className={[style.main, Classes.DARK].join(" ")}>
      <H2 className={style.q1}>オンシュウよりアイをこめて</H2>
      <H2 className={style.q2}>
        我らが征くは
        <span role="img" aria-label="star">
          ⭐
        </span>
        の大海
      </H2>
      <Button
        className={style.gogogo}
        onClick={() => navigate("blog")}
        text="启航>>>"
        large
        minimal
      />
      <Button
        className={style.status}
        onClick={() => navigate("about")}
        text="<<<自省"
        large
        minimal
      />
    </main>
  )
}
