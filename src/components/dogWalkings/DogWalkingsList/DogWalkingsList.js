import React from 'react'
import { observer, inject } from 'mobx-react'

import Table from '../../generic/Table/Table'

const DogWalkingsList = inject('dogWalkingsStore')(observer(props => {
  const { dogWalkingsStore } = props
  const { dogWalkings } = dogWalkingsStore.state
  const rows = dogWalkings.map(dogWalking => {
    return [dogWalking.dog_walking_status.description]
  })
  const headers = ['Status']
  return (
    <Table headers={headers} rows={rows} />
  )
}))

export default DogWalkingsList
