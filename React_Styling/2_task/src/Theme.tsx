import { ThemeProvider } from "styled-components";

// TODO
// lower case for keys 
const themes = {
    
    // Buttons //

    Primary: {
        backgroundColor: '#c7edef',
        color: '#707070',
        textShadow: '1px 1px 1px #ffe1cd'
    },
    Secondary: {
        backgroundColor: '#707070',
        color: '#c7edef',
        textShadow: '1px 1px 1px #f9ee54'
    },
    Warning: {
        backgroundColor: '#f9ee54',
        color: '#f3a903',
        textShadow: '1px 1px 1px #f3a903'
    },
    Danger: {
        backgroundColor: '#9a67bd',
        color: '#ffe1cd',
        textShadow: '1px 1px 1px #ffe1cd'
    },
    size: {
        small: {
            height: '1rem',
            width: '1rem'
        },
        normal: {
            height: '5rem',
            width: '5rem',
        },
        large: {
            height: '8rem',
            width: '8rem',
        }
    },


    black: '#000000',
    white: '#ffe1cd',

    
}

type Props = {
    children: React.ReactNode,
}

const Theme = ({ children }: Props) => (
    <ThemeProvider theme={themes}> {children}</ThemeProvider>
)

export default Theme