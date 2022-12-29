import React, { useState } from 'react';
import Picasso from '@toptal/picasso-provider'
import { Button, Container, Grid, Helpbox, Page, Paper, Section, Table } from '@toptal/picasso'
import { data } from './db/db'
import PageTopBar from '@toptal/picasso/PageTopBar/PageTopBar';
import { Form } from '@toptal/picasso-forms';

const universes = data
  .map(row => row.universe)
  .filter((value, index, self) => self.indexOf(value) === index)

const universeOptions = universes.map(universe => ({ value: universe, text: universe })
)

interface Heroes {
  id: number,
  name: string,
  hero: string,
  universe: string,
  cape: string,
}

function App() {

  const [heroes, setHeroes] = useState<Heroes[]>(data)

  const pushNewHero = (values: { ogName: string; heroName: string; isCape: string; newUniverse: string; }) => {
    const id = Number(crypto.randomUUID)
    const name = values.ogName
    const hero = values.heroName
    const cape = values.isCape === 'Yes' ? 'Yes' : 'No'
    const universe = values.newUniverse ? values.newUniverse : '-'
  
    const newHero = {id, name, hero, cape, universe}
  
    setHeroes((previousHeroes) => [...previousHeroes,newHero] )
  }

  return (
    <Picasso>
      <Page>
        <Page.TopBar title='Top Heroes' style={{ paddingLeft: '10rem' }} />
        <Page.Content>

          <Container bordered rounded padded='small' style={{ height: '27rem' }} top='xsmall' bottom='xsmall' left={10} right='small'>
            <Form onSubmit={pushNewHero}>
              <Form.Input
                enableReset
                onResetClick={(set: (value: string) => void) => {
                  set('')
                }}
                required
                name='ogName'
                label='Original Name'
                placeholder='Type the secret identity of our hero'
              />
              <Form.Input
                enableReset
                onResetClick={(set: (value: string) => void) => {
                  set('')
                }}
                required
                name='heroName'
                label='Hero Name'
                placeholder='How do you want to call our hero'
              />
              <Form.RadioGroup name='isCape' label='Wears a cape?' required>
                <Form.Radio label='Yes' value='Yes' />
                <Form.Radio label='No' value='No' />
              </Form.RadioGroup>
              <Form.Select
                name='newUniverse'
                label='Universe'
                width='auto'
                options={universeOptions}
              />
              <Container top='small'>
                <Form.SubmitButton variant='positive'>Create</Form.SubmitButton>
              </Container>
            </Form>
          </Container>

          <Container top='xsmall' bottom='xsmall' left='small' right={10}>
            <Table variant='striped'>
              <Table.Head>
                <Table.Row>
                  <Table.Cell>Name</Table.Cell>
                  <Table.Cell>Hero</Table.Cell>
                  <Table.Cell>Cape</Table.Cell>
                  <Table.Cell>Universe</Table.Cell>
                </Table.Row>
              </Table.Head>
              <Table.Body>
                {heroes.map(row => (
                  <Table.Row key={row.id}>
                    <Table.Cell>{row.name}</Table.Cell>
                    <Table.Cell>{row.hero}</Table.Cell>
                    <Table.Cell>{row.cape}</Table.Cell>
                    <Table.Cell>{row.universe}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
              <Table.Footer>
                <Table.Row>
                  <Table.Cell colSpan={3}>Total</Table.Cell>
                  <Table.Cell>{heroes.length}</Table.Cell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </Container>

        </Page.Content>
      </Page>
    </Picasso>
  );
}

export default App;
