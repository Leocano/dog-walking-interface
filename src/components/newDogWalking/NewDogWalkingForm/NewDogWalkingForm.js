import React from 'react'
import { observer, inject } from 'mobx-react'

import DatePicker from 'react-datepicker'
import Select from 'react-select'

import 'react-datepicker/dist/react-datepicker.css';

const NewDogWalkingForm = inject('newDogWalkingStore', 'petsStore')(observer(props => {
  const { newDogWalkingStore, petsStore } = props
  const { scheduledDate, duration } = newDogWalkingStore.state.newDogWalking
  const selectedPets = newDogWalkingStore.state.pets
  const { pets } = petsStore.state
  return (
    <form>
      <div className="field">
        <label className="label">
          Data de agendamento
        </label>
        <div className="control">
          <DatePicker 
            selected={scheduledDate}
            className='input'
            onChange={(value) => newDogWalkingStore.setScheduledDate(value)}
            timeFormat='HH:mm'
            dateFormat='DD/MM/YYYY HH:mm'
            showTimeSelect
          />
        </div>
      </div>
      <div className="field">
        <label className="label">
          Duração
        </label>
        <div className="control">
          <div className="select">
            <select 
              value={duration} 
              onChange={(event) => newDogWalkingStore.setDuration(event.target.value)}
            >
              <option value="30">30 min</option>
              <option value="60">60 min</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">
          Pets
        </label>
        <div className="control">
          <Select 
            isMulti
            value={selectedPets}
            options={pets.map(pet => {
              return {value: pet.id, label: pet.name}
            })}
            onChange={pets => newDogWalkingStore.setPets(pets)}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">
          Preço
        </label>
        <div className="control">
          <input className='input' value={newDogWalkingStore.price} readOnly />
        </div>
      </div>
    </form>
  )
}))

export default NewDogWalkingForm
