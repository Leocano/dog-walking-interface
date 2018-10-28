import React from 'react'
import { inject, observer } from 'mobx-react'

import Title from '../../generic/Title/Title'
import Columns from '../../generic/Columns/Columns'
import Column from '../../generic/Column/Column'

import './DogWalkingInfo.css'

const DogWalkingInfo = inject('showDogWalkingStore')(observer(props => {
  const { dogWalking } = props.showDogWalkingStore.state
  const duration = new Date(null)
  duration.setSeconds(dogWalking.real_duration)

  return (
    <div className='app-dog-walking-info'>
      <Columns isMultiline>
        <Column>
          <Title size={3}>Status</Title>
          <span className='info-highlight'>{dogWalking.dog_walking_status.description}</span>
        </Column>
        <Column>
          <Title size={3}>Duração Real</Title>
          <span className='info-highlight'>
            {`${duration.toLocaleTimeString()}`}
          </span>
        </Column>
        <Column>
          <Title size={3}>Agendado para</Title>
          <span className='info-highlight'>
            {`${new Date(dogWalking.scheduled_date).toLocaleDateString('pt-br')}`}
          </span>
        </Column>
        <Column>
          <Title size={3}>Início</Title>
          <span className='info-highlight'>
            {new Date(dogWalking.start_time).toLocaleString('pt-br') || 'Não iniciado'}
          </span>
        </Column>
        <Column>
          <Title size={3}>Fim</Title>
          <span className='info-highlight'>
            {new Date(dogWalking.finish_time).toLocaleString('pt-br') || 'Não finalizado'}
          </span>
        </Column>
        <Column>
          <Title size={3}>Preço</Title>
          <span className='info-highlight'>
            {`R$ ${dogWalking.price.toFixed(2)}`}
          </span>
        </Column>
      </Columns>
    </div>
  )
}))

export default DogWalkingInfo
