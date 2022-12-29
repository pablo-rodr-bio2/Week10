import React from 'react';
import Picasso from '@toptal/picasso-provider'
import { Button, Container, Grid, Helpbox, Page, Paper, Section, Table } from '@toptal/picasso'
import { data } from './db/db'
import PageTopBar from '@toptal/picasso/PageTopBar/PageTopBar';


function App() {

  console.log(data)
  return (
    <Picasso>
      <Page>
        <Page.TopBar title='Top Heroes' style={{ paddingLeft: '10rem'}} />
        <Page.Content>

          <Container bordered rounded padded='small' style={{ height: '10rem' }} top='xsmall' bottom='xsmall' left={10} right='small'>
            <Helpbox >
              <Helpbox.Title>Box1</Helpbox.Title>
              <Helpbox.Content>
                This is the content of the first box. It should be aligned to the left
              </Helpbox.Content>
            </Helpbox>
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
                {data.map(row => (
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
                  <Table.Cell>{data.length}</Table.Cell>
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
