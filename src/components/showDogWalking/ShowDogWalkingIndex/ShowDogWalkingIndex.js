import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'

import Container from '../../generic/Container/Container'
import Box from '../../generic/Box/Box'
import Title from '../../generic/Title/Title'
import Loader from '../../generic/Loader/Loader'
import DogWalkingInfo from '../DogWalkingInfo/DogWalkingInfo'
import Button from '../../generic/Button/Button'
import Columns from '../../generic/Columns/Columns'
import Column from '../../generic/Column/Column'

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
            <Columns>
              <Column>
                <Title>Dog Walking - {this.props.match.params.id}</Title>
              </Column>
              <Column className='has-text-right'>
                <Link to='/' className='button'>Voltar</Link>
              </Column>
            </Columns>
            <div className="field is-grouped">
              <div className="control">
                <Button text='Iniciar' onClick={() => showDogWalkingStore.startDogWalking()} /> 
              </div>
              <div className="control">
                <Button text='Encerrar' onClick={() => showDogWalkingStore.finishDogWalking()} />
              </div>
            </div>
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
