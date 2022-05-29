import React from "react";
import { ButtonBoxSt, theme } from "./_calculator_theme";
import { ThemeProvider } from "@emotion/react";
import { Button } from "./Button";

export const ButtonBox = ({onClick}) => {
    const btnValues = [
  "C", "+/-", "%", "/",
  7, 8, 9, "X",
  4, 5, 6, "-",
  1, 2, 3, "+",
  0, ".", "=",
];

    const buttons = btnValues.map((btn,i) => 
        <Button 
        key={i} 
        value={btn} 
        onClick={onClick}
        />    
    )

return <ThemeProvider theme={theme}>
    <ButtonBoxSt children={buttons} />
</ThemeProvider>
    
}