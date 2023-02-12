// THIS VIEW WILL DISPLAY THE FORM FOR ADDING AN EXERCISE SCHEDULE FOR THE DAY - NEED TO WORK ON STYLING - NEED TO ADD START/RESET BUTTON

import "./styles.scss";
import "./Countdown";
import Countdown from "./Countdown";
import { useState, useEffect } from "react";

const movements = ["Pick an exercise", "Squats", "Push-ups", "Sit-ups", "Wide Grip Pull-Up"]

const movementOptions = movements.map((exercise) => (<option value={exercise}>{exercise}</option>))

const repsOptions = ["Number of reps", "5", "10", "15", "20"].map((reps) => (<option value={reps}>{reps}</option>))
const setsOptions = ["Number of sets", "1", "2", "3", "4", "5"].map((sets) => (<option value={sets}>{sets}</option>))

const intervalOptions = ["Length of interval (min)", "15", "30", "45", "60"].map((interval) => (<option value={interval}>{interval}</option>))


export default function Form(props) {

  const [showTimer, setShowTimer] = useState(false)
  const [timer, setTimer] = useState(30)


  const onStart = (e) => { 
    e.preventDefault()
    setShowTimer(true)
  };

  useEffect(() => {
    if (!showTimer) return 
    const intervalId = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    
    if (timer < 1) {
      clearInterval(intervalId)
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timer, showTimer]);

  return (
    <>
      <form className="dailyForm">
        <select id="movement" name="movement">
          {movementOptions}
        </select>
        <select id="reps" name="reps">
          {repsOptions}
        </select>
        <select id="movement" name="sets">
          {setsOptions}
        </select>
        <select id="interval" name="interval" onChange={(e) => {setTimer(e.target.value)}}>
          {intervalOptions}
        </select>
        <button onClick={onStart}>Start</button>
        
      </form>

      <button onClick={props.onBack}>Back</button>
      {showTimer && <Countdown timer={timer} />}

    </>
  )
}