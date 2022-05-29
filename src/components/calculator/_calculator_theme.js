import styled from "@emotion/styled";
import "../../fonts.css";


export const theme = {
    colors: {
        lightgray: '#d6d6d6',
        lightyellow: '#ffee32',
        yellow: '#ffd100',
        black: '#121212',
        lightblack: '#404040'

    }
}

export const WrapperSt = styled.div`
display: flex;
flex-direction: column;
gap:10px;
box-shadow:
  1.7px 0.5px 2.7px rgba(0, 0, 0, 0.042),
  4.3px 1.3px 6.9px rgba(0, 0, 0, 0.045),
  8.9px 2.7px 14.2px rgba(0, 0, 0, 0.05),
  18.3px 5.5px 29.2px rgba(0, 0, 0, 0.1),
  20px 15px 80px rgba(0, 0, 0, 0.2)
;

/* inset 5px 5px 1px 1px ${props => props.theme.colors.black}; */
border: solid 2px ${props => props.theme.colors.black};;
border-radius: 20px;
width: 340px;
height: 540px;
padding:20px 15px;
background: ${props => props.theme.colors.yellow};
`
export const ScreenSt = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
box-shadow: 2px 2px 2px 2px ${props => props.theme.colors.black};
border-radius: 20px;
width: 100%;
font-family: 'Hanuman', serif;
font-size: 1.75rem;
padding: 10px;
background: ${props => props.theme.colors.lightgray};
color: ${props => props.theme.colors.black};

`
export const ButtonBoxSt = styled.div`
box-sizing: border-box;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(5, 1fr);
gap:10px;
box-shadow: 2px 2px 2px 2px ${props => props.theme.colors.lightgray};
border-radius: 20px;
width: 100%;
height: calc(100% - 110px);
padding: 10px;
background: ${props => props.theme.colors.lightblack};
`
export const ButtonSt = styled.button`
border: 5px solid ${props => props.theme.colors.lightgray};
border-radius: 50%;
font-size: large;
font-weight: 900;
background: ${props => props.theme.colors.lightyellow};
color: ${props => props.theme.colors.lightblack};
cursor: pointer;
&:hover {
    background: ${props => props.theme.colors.yellow};
    font-size: xx-large;
}

${props => props.type === "=" 
?`grid-column: 3/5;
border-radius: 10px;
background: ${props.theme.colors.lightgray};
color: ${props.theme.colors.black};
&:hover {
    background: ${props.theme.colors.black};
    color: ${props.theme.colors.lightyellow};
}
`
:""};
`

