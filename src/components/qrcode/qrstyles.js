import styled from "@emotion/styled";
import "../../fonts.css";

export const theme = {
    colors: {
        white: 'hsl(0, 0%, 100%)',
        lightgray: 'hsl(212, 45%, 89%)',
        grayishblue: 'hsl(220, 15%, 55%)',
        darkblue: 'hsl(218, 44%, 22%)'

    },

    typography: {
        fontfamily: 'Outfit'

}
}

export const MainCnt = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 100px;
background-color: ${props => props.theme.colors.lightgray};
`

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap:20px;
border-radius: 20px;
width: 300px;
height: fit-content;
padding: 20px 20px 40px 20px;
text-align: center;
background-color: ${props => props.theme.colors.white};
`

export const Title = styled.p`
margin: 0;
font-family: ${props => props.theme.typography.fontfamily};
font-size: 20px;
font-weight: 700;
line-height: 25px;
color: ${props => props.theme.colors.darkblue};
`

export const Paragraph = styled.p`
margin: 0;
font-family: ${props => props.theme.typography.fontfamily};
font-size: 15px;
font-weight: 400;
line-height: 19px;
color: ${props => props.theme.colors.grayishblue};
`
