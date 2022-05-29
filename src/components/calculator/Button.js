import { ButtonSt, theme } from "./_calculator_theme";
import { ThemeProvider } from "@emotion/react";

export const Button = ({value, onClick}) => {
    return <ThemeProvider theme={theme}>
        <ButtonSt type={value} onClick={onClick}>
            {value}
        </ButtonSt>
    </ThemeProvider>
}