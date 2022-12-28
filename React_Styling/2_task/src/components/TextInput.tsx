import React from 'react'
import styled from 'styled-components'

type Props = {
  fullWidth?: boolean,
}

const StyledTextInput = styled.input<Props>`
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
width: ${props => props.fullWidth ? '100%' : '40rem'};
`

const TextInput = ({  fullWidth }: Props) => {
  return (
    <StyledTextInput type="text" fullWidth={fullWidth} placeholder='Your text here...'/>
  )
}

export default TextInput