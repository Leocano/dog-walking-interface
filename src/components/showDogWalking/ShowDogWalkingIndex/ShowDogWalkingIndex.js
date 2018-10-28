import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import Container from '../../generic/Container/Container'
import Box from '../../generic/Box/Box'
import Title from '../../generic/Title/Title'
import Loader from '../../generic/Loader/Loader'
import DogWalkingInfo from '../DogWalkingInfo/DogWalkingInfo'

const ShowDogWalkingIndex = inject('showDogWalkingStore')(observer(
  class ShowDogWalkingIndex extends Component {
    constructor (props) {
      super(props)
      this.props.showDogWalkingStore.fetchDogWalking(this.props.match.params.id)
    }

    render () {
      const { isFetching } = this.props.showDogWalkingStore.state
      return (
        <Container>
          <Box>
            <Title>Dog Walking - {this.props.match.params.id}</Title>
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
