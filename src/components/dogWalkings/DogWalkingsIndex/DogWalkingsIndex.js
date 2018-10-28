import React from 'react'

import Container from '../../generic/Container/Container'
import Box from '../../generic/Box/Box'
import Title from '../../generic/Title/Title'
import DogWalkingsList from '../DogWalkingsList/DogWalkingsList'

const DogWalkingsIndex = props => {
  return (
    <Container>
      <Box>
        <Title>Dog Walkings</Title>
        <DogWalkingsList />
      </Box>
    </Container>
  )
}

export default DogWalkingsIndex