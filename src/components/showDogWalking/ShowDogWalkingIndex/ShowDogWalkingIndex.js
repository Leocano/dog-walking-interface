import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import Container from '../../generic/Container/Container'
import Box from '../../generic/Box/Box'
import Title from '../../generic/Title/Title'
import Loader from '../../generic/Loader/Loader'
import DogWalkingInfo from '../DogWalkingInfo/DogWalkingInfo'
import Button from '../../generic/Button/Button'

const ShowDogWalkingIndex = inject('showDogWalkingStore')(observer(
  class ShowDogWalkingIndex extends Component {
    constructor (props) {
      super(props)
      this.props.showDogWalkingStore.fetchDogWalking(this.props.match.params.id)
    }

    render () {
      const { showDogWalkingStore } = this.props
      const { isFetching } = showDogWalkingStore.state
      return (
        <Container>
          <Box>
            <Title>Dog Walking - {this.props.match.params.id}</Title>
            <Button text='Iniciar' onClick={() => showDogWalkingStore.startDogWalking()} />
            <Button text='Encerrar' />
            <Loader isLoading={isFetching}>
              <DogWalkingInfo />
            </Loader>
          </Box>
        </Container>
      )
    }
  }
))

export default ShowDogWalkingIndex
