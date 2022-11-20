import React, {useReducer} from 'react'
import {ButtonForm, ButtonStart} from './ActionsButtons'
import TrackerEditForm from './TrackerEditForm'
import UserPersonalTrackerData from './UserPersonalTrackerData'
import './ToolBox.css'
import ButtonTrack from './ActionsButtons'

export default function TrackerTool({
  allTracker,
  selectedTracker,
  dispatch,
  state,
  setSelectedTracker,
  setAllTrackers,
  addTracker,
  deleteTracker,
}) {
  const buttonForm = state.activeButton.form ? (
    <ButtonForm
      state={state}
      dispatch={dispatch}
      remonter={state.remonter}
      setSelectedTracker={setSelectedTracker}
    />
  ) : (
    ''
  )

  const buttonTrack = state.activeButton.track ? (
    <ButtonTrack
      state={state}
      dispatch={dispatch}
      remonter={state.remonter}
      setSelectedTracker={setSelectedTracker}
    />
  ) : (
    ''
  )

  const buttonStart = state.activeButton.start ? (
    <ButtonStart
      state={state}
      dispatch={dispatch}
      remonter={state.remonter}
      setSelectedTracker={setSelectedTracker}
    />
  ) : (
    ''
  )

  return (
    <div className="toolbox">
      <UserPersonalTrackerData state={state} />
      <TrackerEditForm
        state={state}
        dispatch={dispatch}
        remonter={state.remonter}
        selectedTracker={selectedTracker}
        setAllTrackers={setAllTrackers}
        allTracker={allTracker}
        addTracker={addTracker}
        deleteTracker={deleteTracker}
      />
      {buttonForm}
      {buttonTrack}
      {buttonStart}
    </div>
  )
}
