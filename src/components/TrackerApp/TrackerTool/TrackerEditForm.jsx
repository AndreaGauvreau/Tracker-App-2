import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const getDateTimeForPicker = (date = new Date()) => {
  const dateIso = date.toISOString()
  return dateIso.substring(0, dateIso.length - 5)
}

export const newTracker = () => ({
  id: uuidv4(),
  category: 'Default',
  starttime: getDateTimeForPicker(),
  endtime: '',
  name: '',
})

export default function TrackerEditForm({
  selectedTracker = {...newTracker, id: ''},
  addTracker,
  deleteTracker,
  updateTracker,
  setAllTrackers,
  allTracker,
  state,
}) {
  const [trackers, setTrackers] = useState(selectedTracker)

  console.log('tracker', trackers)
  console.log('selectedTracker', selectedTracker)

  const handleTrackerName = e => {
    setTrackers({...trackers, name: e.target.value})
  }
  const handleTrackerEndTime = e => {
    setTrackers({...trackers, endtime: e.target.value})
  }
  const handleTrackerStartTime = e => {
    setTrackers({...trackers, starttime: e.target.value})
  }
  const handleTrackerCategory = e => {
    setTrackers({...trackers, category: e.target.value})
    console.log(trackers)
  }
  const handleDelete = () => {
    deleteTracker()
  }
  const handleSubmit = e => {
    e.preventDefault()
    addTracker(trackers)
  }
  const classremonter = state.activeModal.form ? 'remonter' : ''
  return (
    <div className="formmodal" id={classremonter}>
      <form onSubmit={handleSubmit}>
        <input
          id="textinput"
          type="text"
          placeholder="Titre"
          value={trackers.name}
          onChange={handleTrackerName}
        />
        <input
          id="dateinput"
          type="datetime-local"
          value={trackers.starttime}
          onChange={handleTrackerStartTime}
        />
        <input
          id="dateinput"
          type="datetime-local"
          value={trackers.endtime}
          onChange={handleTrackerEndTime}
        />
        <select
          id="textinput"
          value={trackers.category}
          onChange={handleTrackerCategory}
        >
          <option value="Default">Default</option>
          <option value="Sport">Sport</option>
          <option value="Code">Code</option>
          <option value="Films">Films</option>
        </select>
        <input type="button" onClick={handleDelete} value="delete" />
        <input type="submit" />
      </form>
    </div>
  )
}
