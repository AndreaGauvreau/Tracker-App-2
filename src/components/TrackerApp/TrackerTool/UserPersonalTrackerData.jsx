import React from 'react'

export default function UserPersonalTrackerData({state}) {
  const classremonter = state.activeModal.start ? 'remonter' : ''

  return (
    <div className="userdatamodal" id={classremonter}>
      ok
    </div>
  )
}
