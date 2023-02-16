// THIS VIEW WILL DISPLAY THE FORM FOR ADDING AN EXERCISE SCHEDULE FOR THE DAY - NEED TO WORK ON STYLING - NEED TO ADD START/RESET BUTTON

import "./styles.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCirclePlay, faCircleLeft, faRotateRight, faPlus } from "@fortawesome/free-solid-svg-icons";


import { useState, useEffect } from "react";
import Countdown from "./Countdown";
import DailyTotal from "./DailyTotal";

const movements = ["Pick an exercise", "Squats", "Push-ups", "Sit-ups", "Pull-ups", "Jumping Jacks", "Plank walk-outs"]

const movementOptions = movements.map((exercise) => (<option value={exercise}>{exercise}</option>))

const repsOptions = ["Number of reps", "5", "10", "15", "20"].map((reps) => (<option value={reps}>{reps}</option>))
const setsOptions = ["Number of sets", "2", "4", "6", "8", "10"].map((sets) => (<option value={sets}>{sets}</option>))

const intervalOptions = ["Interval length (min)", "1", "15", "30", "45", "60"].map((interval) => (<option value={interval}>{interval}</option>))

export default function Form(props) {
  // Handle form submit - pass info up to index
  const onTrigger = (event) => {
    props.onDone(dailyTotal);
    event.preventDefault();
  }

  const [movement, setMovement] = useState("");
  const [reps, setReps] = useState("0");
  const [dailyTotal, setDailyTotal] = useState({
    movement: "",
    reps: 0,
    sets: 0
  });

  const [showTimer, setShowTimer] = useState(false)
  const [length, setLength] = useState(0);
  const [timer, setTimer] = useState(0)
  const [alarmRepeat, setAlarmRepeat] = useState(false);

  const onStart = (e) => { 
    e.preventDefault()
    setShowTimer(true)
    // set to true so alarm will sound - passed to Countdown as prop
    setAlarmRepeat(true)
  };
// combine setting timer and length of timer so reset button can grab the value in interval select as well
  const getTimerLength = function(d) {
    setTimer(d * 60)
    setLength(d * 60)
  }

// combine setting data for Daily Total and set alarmRepeat to false so sound does not play on re-render
  const onMoved = function(d) {
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
      <form className="dailyForm" autoComplete="off" onSubmit={onTrigger}>
      <div className="formButtons">
        <button onClick={props.onBack}><FontAwesomeIcon icon={faCircleLeft}/>&nbsp;Back</button>
        </div>
        <div className="formFields">
          <div className="formFieldsTop">
          <select id="movement" name="movement" onChange={(event) => setMovement(event.target.value)}>
          {movementOptions}
          </select>
          <select id="reps" name="reps" onChange={(event) => setReps(event.target.value)}>
          {repsOptions}
          </select>
          </div>
          <div className="formFieldsBottom">
          <select id="sets" name="sets">
          {setsOptions}
          </select>
          <select id="interval" name="interval" onChange={(e) => {getTimerLength(e.target.value)}}>
          {intervalOptions}
          </select>
          </div>
        </div>
        <div className="formButtons right">
        <button onClick={onStart}><FontAwesomeIcon icon={faCirclePlay}/>&nbsp;Start</button>
        <button classNames="done" type="submit"><FontAwesomeIcon icon={faCircleCheck}/>&nbsp;Done</button>
        </div>
      </form>
      {/** Insert countdown with buttons and daily total */}
      {showTimer && 
        <div className="hidden">
          <div className="countText">
            <Countdown timer={timer} alarmRepeat={alarmRepeat}/>
            <DailyTotal 
          dailyTotal={dailyTotal}
          />
          </div>
          <div className="formButtons right">
          <button onClick={() => onReset(length)}><FontAwesomeIcon icon={faRotateRight}/>&nbsp;Reset</button>
          <button onClick={() => {onMoved
        (prev => ({
          ...prev, movement: movement, reps: reps, sets: dailyTotal.sets + 1
        }))
        }}><FontAwesomeIcon icon={faPlus}/>&nbsp;Moved</button>
          </div>
        </div>
      }
    </>
  )
}