// THIS VIEW WILL DISPLAY THE EXERCISE TALLY FOR THAT DAY AS THE REPS INCREASE AND ONCE THE DAY HAS BEEN COMPLETED - NEED TO WORK ON PULLING DATA BY DAY - NEED TO WORK ON STYLING

export default function MovementComplete(props) {
  console.log(props)
  return (
    <aside className="dailyTotal">
      <p>{props.dailyMovement.reps * props.dailyMovement.sets + " " + props.dailyMovement.movement}</p>
    </aside>
  )
  
}