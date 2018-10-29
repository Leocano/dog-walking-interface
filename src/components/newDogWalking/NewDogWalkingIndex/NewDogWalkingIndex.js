import React from 'react'
import { Link } from 'react-router-dom'

import Container from '../../generic/Container/Container'
import Box from '../../generic/Box/Box'
import Title from '../../generic/Title/Title'
import Columns from '../../generic/Columns/Columns'
import Column from '../../generic/Column/Column'

const NewDogWalkingIndex = props => {
  return (
    <Container>
      <Box>
        <Columns>
          <Column>
            <Title>Novo Dog Walking</Title>
          </Column>
          <Column className='has-text-right'>
            <Link to='/' className='button'>Voltar</Link>
          </Column>
        </Columns>
      </Box>
    </Container>
  )
}

export default NewDogWalkingIndex
