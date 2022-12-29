import React from 'react';
import Theme from './Theme';
import Button from './components/Button';
import TextInput from './components/TextInput';
import Loader from './components/Loader';
import styled from 'styled-components';


const StyledApp = styled.div`
  box-sizing: box-content;
  margin: 20px 20px 200px 200px;
  width: 1440px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    background-color: ${props => props.theme.Primary.backgroundColor};
    height: 3rem;
    border-radius: 20px;
  }
`
function App() {
  return (
    <Theme>
      <StyledApp>
        <label>Buttons</label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Button variant='Primary' size='normal'>Primary</Button>
          <Button variant='Secondary' size='large'>Secondary</Button>
          <Button variant='Warning' >Warning</Button>
          <Button variant='Danger' fullWidth={true}>Danger</Button>
        </div>

        <label>Text Input</label>
        <div>
          <TextInput />
        </div>

        <label>Loader</label>
        <div style={{display: 'flex'}}>
          <Loader variant='Primary' size="small" />
          <Loader variant='Secondary' size="normal" />
          <Loader variant='Warning' size="large" />
        </div>

      </StyledApp>
    </Theme>

  );
}

export default App;
