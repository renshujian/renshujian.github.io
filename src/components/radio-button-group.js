import React from "react"
import { Button, ButtonGroup } from "@blueprintjs/core"

export function RadioButtonGroup({
  options,
  selectedValue,
  ...buttonGroupProps
}) {
  return (
    <ButtonGroup {...buttonGroupProps}>
      {options.map(({ value, label }) => (
        <Button
          key={value}
          value={value}
          text={label || value}
          active={selectedValue === value}
        />
      ))}
    </ButtonGroup>
  )
}
