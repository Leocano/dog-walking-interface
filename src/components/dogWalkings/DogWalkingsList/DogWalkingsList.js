import React, { Fragment } from 'react'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'

import Table from '../../generic/Table/Table'
import ButtonToggle from '../../generic/ButtonToggle/ButtonToggle'

const DogWalkingsList = inject('dogWalkingsStore')(observer(props => {
  const { dogWalkingsStore } = props
  const { dogWalkings, fetchAll } = dogWalkingsStore.state
  const rows = dogWalkings.map(dogWalking => {
    const id = dogWalking.id
    const statusDescription = dogWalking.dog_walking_status.description
    const duration = `${dogWalking.duration} min`
    const scheduledDate = new Date(dogWalking.scheduled_date)
    const price = dogWalking.price
    const moreInfoButton = <Link className='button is-small' to={`/dog-walking/${id}`}>Mais Informações</Link>
    return [statusDescription, duration, scheduledDate.toLocaleString('pt-br'), price, moreInfoButton]
  })
  const headers = ['Status', 'Duração', 'Agendado para', 'Preço', '']
  return (
    <Fragment>
      <ButtonToggle 
        text='Buscar todos'
        onClick={() => dogWalkingsStore.toggleFetchAll()}
        isActive={fetchAll}
      />
      <Table headers={headers} rows={rows} />
    </Fragment>
  )
}))

export default DogWalkingsList
