/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";
import {theme,
  MainCnt,
  Wrapper,
  Title,
  Paragraph
} from "./qrstyles";
import qrcode from "./images/image-qr-code.png"

export const QrCode = () => {
  return  <ThemeProvider theme={theme}>
    <MainCnt>
      <Wrapper>
        <img src={qrcode} alt="QR Code" css={css`
        border-radius: 10px;
        `}/>
        <Title>
          Improve your front-end <br></br>skills by building projects
        </Title>
        <Paragraph>
          Scan the QR code to visit  Frontend<br></br>
          Mentor and take your coding skills to<br></br>
          the next level
        </Paragraph>
      </Wrapper>
    </MainCnt> 
  </ThemeProvider>
    
  
}

