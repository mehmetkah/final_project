// THIS VIEW WILL DISPLAY THE EXERCISE TALLY FOR THAT DAY AS THE REPS INCREASE AND ONCE THE DAY HAS BEEN COMPLETED - NEED TO WORK ON PULLING DATA BY DAY - NEED TO WORK ON STYLING

export default function MovementComplete(props) {

  const snacksByDay = {
    "1":{
      id: 1,
      day: "Monday",
      exercise: "Squats",
      reps: "10",
      sets: "10"
    },
    "2":{
      id: 2,
      day: "Tuesday",
      exercise: "Push-ups",
      reps: "7",
      sets: "5"
    },
  };

  const getMovementForDay = function(day, data) {
    let dataArr = Object.entries(data);
    let MovementForDay = {};
    for (const d of dataArr) {
      if (d[1].day === day) {
        MovementForDay = d[1];
      }
    }
    return MovementForDay;
  }
  const dailyMovement = getMovementForDay("Monday", snacksByDay);

  return (
    <aside className="dailyTotal">
      <p>{dailyMovement.reps * dailyMovement.sets + " " + dailyMovement.exercise}</p>
    </aside>
  )
  
}