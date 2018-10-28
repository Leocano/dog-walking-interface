import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'

import Container from '../../generic/Container/Container'
import Box from '../../generic/Box/Box'
import Title from '../../generic/Title/Title'

const ShowDogWalkingIndex = inject('showDogWalkingStore')(observer(
  class ShowDogWalkingIndex extends Component {
    constructor (props) {
      super(props)
      this.props.showDogWalkingStore.fetchDogWalking(this.props.match.params.id)
    }

    render () {
      return (
        <Container>
          <Box>
            <Title>Dog Walking - {this.props.match.params.id}</Title>
          </Box>
        </Container>
      )
    }
  }
))

export default ShowDogWalkingIndex
