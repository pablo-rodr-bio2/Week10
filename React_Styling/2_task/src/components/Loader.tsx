import React from 'react'
import styled, { keyframes } from 'styled-components'


interface Props {
    variant: string, 
    size?: string,
}

const ldsDualRingAnimation = keyframes`
    0% { transform: rotate(0deg);}
    100% { transform: rotate(360deg); }
`
// shamelessly ripped off from https://loading.io/css/
const StyledLoader = styled.div<Props>`
    display: inline-block;
    margin: 2rem;

    width: ${ props => props.size ? `${props.theme.size[props.size].width}` : '80px'};
    height: ${ props => props.size ? `${props.theme.size[props.size].width}` : '80px'};

    &:after {
        content: " ";
        display: block;
        margin: 3px;
        border-radius: 50%;

        width:  ${ props => props.size ? `${props.theme.size[props.size].width}` : '64px'};

        height: ${ props => props.size ? `${props.theme.size[props.size].height}` : '64px'};

        border: 6px solid ${props => props.theme[props.variant].color};

        border-color: ${props => props.theme[props.variant].color} transparent ${props => props.theme[props.variant].color} transparent;
        
        animation: ${ldsDualRingAnimation} 1.2s linear infinite;
    }
`


const Loader = ({variant, size} : Props) => {
    return (
        <StyledLoader variant={variant} size={size}/>
    )
}

export default Loader