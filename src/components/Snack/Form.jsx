// THIS VIEW WILL DISPLAY THE FORM FOR ADDING AN EXERCISE SCHEDULE FOR THE DAY - NEED TO WORK ON STYLING - NEED TO ADD START/RESET BUTTON

import "./styles.scss";

const movements = ["Pick an exercise", "Squats", "Push-ups", "Sit-ups", "Wide Grip Pull-Up"]

const movementOptions = movements.map((exercise) => (<option value={exercise}>{exercise}</option>))

const repsOptions = ["Number of reps", "5", "10", "15", "20"].map((reps) => (<option value={reps}>{reps}</option>))
const setsOptions = ["Number of sets", "1", "2", "3", "4", "5"].map((sets) => (<option value={sets}>{sets}</option>))

const intervalOptions = ["Length of interval (min)", "15", "30", "45", "60"].map((interval) => (<option value={interval}>{interval}</option>))


export default function Form(props) {
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
      <select id="interval" name="interval">
        {intervalOptions}
      </select>
      <button>Start</button>
      <button onClick={props.onBack}>Back</button>
    </form>
    </>
  )
}