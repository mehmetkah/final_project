// THIS VIEW WILL DISPLAY THE FORM FOR ADDING AN EXERCISE SCHEDULE FOR THE DAY - NEED TO WORK ON STYLING - NEED TO ADD START/RESET BUTTON

import "./styles.scss";

const movements = ["Pick an exercise", "Squats", "Push-ups", "Incline Hammer Curls", "Wide Grip Pull-Up"]

const movementOptions = movements.map((exercise) => (<option value={exercise}>{exercise}</option>))

const setsOptions = ["Number of sets", "1", "3", "5"].map((sets) => (<option value={sets}>{sets}</option>))

const intervalOptions = ["Length of interval", "15", "30", "45", "60"].map((interval) => (<option value={interval}>{interval}</option>))





export default function Form(props) {
  return (
    <form className="dailyForm">

      <select id="movement" name="movement" value="Pick an exercise">
        {movementOptions}
      </select>
      <input id="reps" name="reps" placeholder="Number of Reps" />



      <select id="movement" name="sets">
        {setsOptions}
      </select>



      <select id="interval" name="interval">
        {intervalOptions}
      </select>
    </form>
  )
}