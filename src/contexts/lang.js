import React from "react"
import { LangEnum } from "../enums/lang"

export const LangContext = React.createContext(LangEnum.default)
LangContext.displayName = "LangContext"
