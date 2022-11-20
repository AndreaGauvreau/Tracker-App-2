import React, {useState, useReducer} from 'react'
import Header from '../Ux/Header'
import FilterTracker from './FilterTracker'
import TableTracker from './TableTracker'
import TrackerTool from './TrackerTool/TrackerTool'
import './TrackerApp.css'
import db from '../../data'

const reducer = (state, action) => {
  switch (action.type) {
    case 'launch':
      return {
        remonter: true,
        error: false,
        activeButton: {form: false, start: false, track: true},
        activeModal: {form: true, start: false, update: false},
        clear: true,
      }
    case 'delete':
      return {
        remonter: false,
        error: false,
        activeButton: {form: false, start: true, track: false},
        activeModal: {form: false, start: true, update: false},
        clear: true,
      }
    case 'update':
      return {
        remonter: false,
        error: false,
        activeButton: {form: true, start: false, track: false},
        activeModal: {form: true, start: false, update: false},
        clear: true,
      }
    case 'track':
      return {
        remonter: false,
        error: false,
        activeButton: {form: false, start: true, track: false},
        activeModal: {form: false, start: true, update: false},
        clear: true,
      }
    default:
      throw new Error('Invalid action')
  }
}

export default function TrackerApp() {
  const [state, dispatch] = useReducer(reducer, {
    remonter: false,
    status: 'idle',
    error: false,
    activeButton: {form: false, start: true, track: false},
    activeModal: {form: false, start: true, update: false},
  })
  const [allTrackers, setAllTrackers] = useState(db)
  const [filterText, setFilterText] = useState('')
  const [selectedTracker, setSelectedTracker] = useState({})
  const handleTextChange = text => {
    setFilterText(text)
    const filteredTracker = db.filter(
      e => e.name.toLocaleLowerCase().indexOf(text) !== -1,
    )
    setAllTrackers(filteredTracker)
  }

  const selectedId = () => {}
  const onSelected = () => {}

  const addTracker = tracker => {
    setAllTrackers([...allTrackers, tracker])
    console.log('gettracker', tracker)
  }
  const deleteTracker = tracker => {
    setAllTrackers(allTrackers.filter(item => item.id !== tracker.id))
  }
  const updateTracker = () => {}

  return (
    <main>
      <Header />
      <section>
        <div>
          <TrackerTool
            allTrackers={allTrackers}
            selectedTracker={selectedTracker}
            setSelectedTracker={setSelectedTracker}
            addTracker={addTracker}
            deleteTracker={deleteTracker}
            updateTracker={updateTracker}
            state={state}
            dispatch={dispatch}
            setAllTrackers={setAllTrackers}
          />
        </div>
        <div>
          <div className="headlistingtracker">
            <h3>
              Liste des Trackers <i>({allTrackers.length})</i>
            </h3>
            <FilterTracker handleTextChange={handleTextChange} />
          </div>

          <TableTracker
            allTrackers={allTrackers}
            onSelected={onSelected}
            selectedId={selectedId}
            setSelectedTracker={setSelectedTracker}
            selectedTracker={selectedTracker}
            state={state}
            dispatch={dispatch}
          />
        </div>
      </section>
    </main>
  )
}
