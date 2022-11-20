import React from "react";
import { newTracker } from "./TrackerEditForm";

export default function ButtonTrack({ setRemonter, dispatch, state, setSelectedTracker}) {
  const handleClicks = () => {
    dispatch({ type: "track" });
    setSelectedTracker({})

  };
  return (
    <div className="actionbutton">
      <button id="startbutton" onClick={handleClicks}>
        Track 🚀
      </button>
    </div>
  );
}

export function ButtonForm({ setRemonter, dispatch, state,setSelectedTracker }) {
  const handleClicks = () => {
    dispatch({ type: "delete" });
    setSelectedTracker({name:'', endtime:'', starttime:'', category:'', id:''})
  };
  return (
    <div className="actionbutton">
      <button onClick={handleClicks}>Delete</button>
    </div>
  );
}

export function ButtonStart({ setRemonter, dispatch, state,setSelectedTracker }) {
  const handleClicks = () => {
    dispatch({ type: "launch" });
    setSelectedTracker(newTracker())

  };
  return (
    <div className="actionbutton">
      <button id="startbutton" onClick={handleClicks}>
        Start
      </button>
    </div>
  );
}
