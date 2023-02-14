// THIS VIEW WILL DISPLAY THE FORM FOR ADDING AN EXERCISE SCHEDULE FOR THE DAY - NEED TO WORK ON STYLING - NEED TO ADD START/RESET BUTTON

import "./styles.scss";
import { useState, useEffect } from "react";
import Countdown from "./Countdown";
import DailyTotal from "./DailyTotal";

const movements = ["Pick an exercise", "Squats", "Push-ups", "Sit-ups", "Pull-Ups", "Jumping Jacks"]

const movementOptions = movements.map((exercise) => (<option value={exercise}>{exercise}</option>))

const repsOptions = ["Number of reps", "5", "10", "15", "20"].map((reps) => (<option value={reps}>{reps}</option>))
const setsOptions = ["Number of sets", "1", "2", "3", "4", "5"].map((sets) => (<option value={sets}>{sets}</option>))

const intervalOptions = ["Length of interval (min)", "15", "30", "45", "60"].map((interval) => (<option value={interval}>{interval}</option>))

export default function Form(props) {
  
  const [movement, setMovement] = useState("");
  const [reps, setReps] = useState("0");
  //const [sets, setSets] = useState("0");
  const [dailyTotal, setDailyTotal] = useState({
    movement: "",
    reps: 0,
    sets: 0
  });

  const [showTimer, setShowTimer] = useState(false)
  const [timer, setTimer] = useState(0)
  const [length, setLength] = useState(0);
  const [alarmRepeat, setAlarmRepeat] = useState(false);

  const onStart = (e) => { 
    e.preventDefault()
    setShowTimer(true)
    // set to true so alarm will sound - passed to Countdown as prop
    setAlarmRepeat(true)
  };
// combine setting timer and length of timer so reset button can grab the value in interval select as well
  const getTimerLength = function(d) {
    setTimer(d)
    setLength(d)
  }

// combine setting data for Daily Total and set alarmRepeat to false so sound does not play on re-render
  const onDone = function(d) {
    setDailyTotal(d);
    setAlarmRepeat(false);
  }

  const onReset = function(d) {
    setTimer(d)
    setAlarmRepeat(true)
  }

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
      <form className="dailyForm" autoComplete="off" onSubmit={event => event.preventDefault()}>
        <select id="movement" name="movement" onChange={(event) => setMovement(event.target.value)}>
          {movementOptions}
        </select>
        <select id="reps" name="reps" onChange={(event) => setReps(event.target.value)}>
          {repsOptions}
        </select>
        <select id="sets" name="sets">
          {setsOptions}
        </select>
        <select id="interval" name="interval" onChange={(e) => {getTimerLength(e.target.value)}}>
          {intervalOptions}
        </select>
        <button onClick={onStart}>Start</button>
        <button onClick={props.onBack}>Back</button>
        <button type="submit" onClick={() => {onDone
        (prev => ({
          ...prev, movement: movement, reps: reps, sets: dailyTotal.sets + 1
        }))
        }}>Done</button>
      </form>
      {showTimer && <Countdown timer={timer} alarmRepeat={alarmRepeat}/>}
      {showTimer && <button onClick={() => onReset(length)}>Reset</button>}
    
      <DailyTotal 
        dailyTotal={dailyTotal}
      />
    </>
  )
}