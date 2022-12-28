import React from 'react'
import styled from "styled-components";

interface StyleButtonProps {    
    variant: string,
    fullWidth?: boolean,
    size?: string
}


interface ButtonProps extends StyleButtonProps {
    children: React.ReactNode,
}


const StyledButton = styled.button<StyleButtonProps>`
    font-size: 1em;
    padding: 0.25em 1em;
    border-radius: 20px;
    box-shadow: 0 4px ${props => props.theme.white};
    min-height: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    ${ props => props.size && `height: ${props.theme.size[props.size].height};`}
    width: ${props => props.fullWidth ? '100%' : '200px'};
    background-color: ${props => props.theme[props.variant].backgroundColor};
    color: ${props => props.theme[props.variant].color};
    text-shadow: ${props => props.theme[props.variant].color};
    &:hover{
        cursor:pointer;
        background-color: ${props => props.theme[props.variant].color};
        color: ${props => props.theme[props.variant].backgroundColor};
      }
            


`

const Button = ({  variant, fullWidth, size, children }: ButtonProps) => {

    return (
        <StyledButton variant={variant} fullWidth={fullWidth} size={size}>{children}</StyledButton>
    )
}

export default Button