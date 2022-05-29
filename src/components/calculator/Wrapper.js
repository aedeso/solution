import { WrapperSt, theme } from "./_calculator_theme";
import {ThemeProvider } from "@emotion/react"

export const Wrapper = ({children}) => {
  return  <ThemeProvider theme={theme}>
    <WrapperSt>{children}</WrapperSt>
  </ThemeProvider>
}

    
