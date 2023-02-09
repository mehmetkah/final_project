// THIS VIEW WILL DISPLAY THE FORM FOR ADDING AN EXERCISE SCHEDULE FOR THE DAY - NEED TO WORK ON STYLING - NEED TO ADD START/RESET BUTTON

import "./styles.scss";

export default function Form(props) {
  return(
    <form className="dailyForm">
      <label for="movement">Pick an exercise:</label>
      <select id="movement" name="movement">
        <option value="push-ups">Push-ups</option>
        <option value="squats">Squats</option>
      </select>
      <label for="reps">Number of Reps:</label>
      <select id="reps" name="reps">
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
      <label for="Movement">Number of sets:</label>
      <select id="movement" name="sets">
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
      <label for="interval">Length of interval:</label>
      <select id="interval" name="interval">
        <option value="30">30 min</option>
        <option value="60">60 min</option>
      </select>
    </form>
  )
}