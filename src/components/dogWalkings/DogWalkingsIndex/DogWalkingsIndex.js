import React from 'react'
import { Link } from 'react-router-dom'

import Container from '../../generic/Container/Container'
import Box from '../../generic/Box/Box'
import Title from '../../generic/Title/Title'
import Columns from '../../generic/Columns/Columns'
import Column from '../../generic/Column/Column'
import DogWalkingsList from '../DogWalkingsList/DogWalkingsList'

const DogWalkingsIndex = props => {
  return (
    <Container>
      <Box>
        <Columns>
          <Column>
            <Title>Dog Walkings</Title>
          </Column>
          <Column className='has-text-right'>
            <Link className='button' to='novo-dog-walking'>Novo Dog Walking</Link>
          </Column>
        </Columns>
        <DogWalkingsList />
      </Box>
    </Container>
  )
}

export default DogWalkingsIndex