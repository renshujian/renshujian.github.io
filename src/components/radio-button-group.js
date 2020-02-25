import React from "react"
import { Button, ButtonGroup } from "@blueprintjs/core"

export function RadioButtonGroup({
  options,
  selectedValue,
  onChange,
  ...buttonGroupProps
}) {
  function handleClick(e) {
    if (e.currentTarget.value !== selectedValue) {
      onChange(e.currentTarget.value)
    }
  }
  return (
    <ButtonGroup {...buttonGroupProps}>
      {options.map(({ value, label }) => (
        <Button
          key={value}
          value={value}
          text={label || value}
          active={selectedValue === value}
          onClick={handleClick}
        />
      ))}
    </ButtonGroup>
  )
}
