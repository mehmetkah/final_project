import "./DayListItem.scss";
import { APIKey as APIKey } from "../constants";
import Snack from "./Snack";
import { useState, useEffect } from "react";


export default function DayListItem(props) {

  // TODO: state of specific exercise can go here?
  // PSEUDOCODE:
  // 1. Make a network call to the api-ninjas API
  // 1. Store it in local state in this component, and pass the props down as needed

  // const [exercise, setExercise] = useState(3);
  const fetchExercise = () => {
    fetch("https://api.api-ninjas.com/v1/exercises?type=strength", {
      method: 'GET',
      headers: { 'X-Api-Key': APIKey },
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //setExercise(data[0]);
    })
    .catch((error) => {
      throw error;
    });
  }

  // useEffect(() => {
  //   if(!exercise) {
  //     console.log("Fetching exercise...");
  //     fetchExercise();
  //   }
  // }, [exercise]);


  // const snacksByDay = {
  //   "1":{
  //     id: 1,
  //     day: "Monday",
  //     exercise: "Squats",
  //     reps: "10",
  //     sets: "10"
  //   },
  //   "2":{
  //     id: 2,
  //     day: "Tuesday",
  //     exercise: "Push-ups",
  //     reps: "7",
  //     sets: "5"
  //   },
  // };

  // const dailyMovements = Object.values(snacksByDay).map((movement) => {
  //   return (
  //     <Snack 
  //       key={movement.id}
  //       {...movement}
  //     />
  //   )
  // })

  return (
    <li className="dayListItem">
      <p className="dayName">{props.day}</p>
        <article className="cardContainer">
          <Snack 

          snack={props.snack}
          />
        </article>
    </li>
  )
};



////////////////////////////////////
// DUMMY DATA structure from API: //
////////////////////////////////////
// [
//   {
//     "name": "Incline Hammer Curls",
//     "type": "strength",
//     "muscle": "biceps",
//     "equipment": "dumbbell",
//     "difficulty": "beginner",
//     "instructions": "Seat yourself on an incline bench with a dumbbell in each hand. You should pressed firmly against he back with your feet together. Allow the dumbbells to hang straight down at your side, holding them with a neutral grip. This will be your starting position. Initiate the movement by flexing at the elbow, attempting to keep the upper arm stationary. Continue to the top of the movement and pause, then slowly return to the start position."
//   },
//   {
//     "name": "Wide-grip barbell curl",
//     "type": "strength",
//     "muscle": "biceps",
//     "equipment": "barbell",
//     "difficulty": "beginner",
//     "instructions": "Stand up with your torso upright while holding a barbell at the wide outer handle. The palm of your hands should be facing forward. The elbows should be close to the torso. This will be your starting position. While holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out. Tip: Only the forearms should move. Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second and squeeze the biceps hard. Slowly begin to bring the bar back to starting position as your breathe in. Repeat for the recommended amount of repetitions.  Variations:  You can also perform this movement using an E-Z bar or E-Z attachment hooked to a low pulley. This variation seems to really provide a good contraction at the top of the movement. You may also use the closer grip for variety purposes."
//   },