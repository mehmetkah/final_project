import "./DayListItem.scss"
import Snack from "./Schedule";

export default function DayListItem(props) {
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
          <Snack />
        </article>
    </li>
  )
};