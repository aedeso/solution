import { ScreenSt, theme } from "./_calculator_theme";
import { ThemeProvider } from "@emotion/react";

export const Screen = ({value}) => {
    return <ThemeProvider theme={theme}>
        <ScreenSt>{value}</ScreenSt>
    </ThemeProvider>
} 