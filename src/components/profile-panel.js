import React, { useState } from "react"
import { Card, Button, Divider } from "@blueprintjs/core"
import { MDXRenderer } from "gatsby-plugin-mdx"
import style from "./profile-panel.module.css"

export function ProfilePanel({ pages }) {
  const { length } = pages
  const [index, setIndex] = useState(0)
  const isFirst = index === 0
  const isLast = index === length - 1
  return (
    <Card>
      <div className={style.header}>
        <Button
          disabled={isFirst}
          icon="chevron-left"
          onClick={() => setIndex(index - 1)}
          minimal={true}
        />
        <span className={style.title}>
          {pages[index].frontmatter.title || index + 1}
        </span>
        <Button
          disabled={isLast}
          icon="chevron-right"
          onClick={() => setIndex(index + 1)}
          minimal={true}
        />
      </div>
      <Divider />
      <MDXRenderer>{pages[index].body}</MDXRenderer>
    </Card>
  )
}
