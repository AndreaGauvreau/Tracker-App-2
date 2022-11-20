import React from 'react'
import {diffTime} from '../../function'
import './RowTracker.css'
import DayJS from 'react-dayjs'
import {useState} from 'react'
import {useEffect} from 'react'

export default function RowTracker({
  allTrackers,
  onSelected,
  selectedId,
  state,
  dispatch,
}) {
  const startTime = allTrackers.starttime
  const endTime = allTrackers.endtime
  const [duree, setDuree] = useState(
    diffTime(allTrackers.starttime, allTrackers.endtime),
  )
  const handleClick = () => {
    onSelected(allTrackers)
    dispatch({type: 'update'})
  }
  useEffect(() => {
    const refresh = () => {
      setDuree(diffTime(allTrackers.starttime, allTrackers.endtime))
    }
    const timer = setTimeout(() => refresh(), 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [allTrackers.endtime, allTrackers.starttime, duree])
  const selected = allTrackers.id === selectedId ? 'selected' : ''

  return (
    <div
      key={allTrackers.id}
      className="rowDiv"
      id={selected}
      onClick={handleClick}
    >
      <div>
        <h3>{allTrackers.name}</h3>
      </div>

      <div className="dateTime">
        <span className="DayJS">
          début{' '}
          <DayJS className="datetext" format="DD - HH:mm">
            {startTime}
          </DayJS>
        </span>
        <span className="DayJS">
          fin{' '}
          <DayJS className="datetext" format="DD - HH:mm">
            {endTime}
          </DayJS>
        </span>
        <span>
          durée
          <span className="datetext">{duree}</span>
        </span>
      </div>
    </div>
  )
}
