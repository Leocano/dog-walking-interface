import React from 'react'
import { observer, inject } from 'mobx-react'

import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css';

const NewDogWalkingForm = inject('newDogWalkingStore')(observer(props => {
  const { newDogWalkingStore } = props
  const { scheduledDate, duration } = newDogWalkingStore.state
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
            locale='en-gb'
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
        
        </div>
      </div>
    </form>
  )
}))

export default NewDogWalkingForm
