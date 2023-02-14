export default function DailyTotal(props) {
  
  const reps = props.dailyTotal.reps;
  let sets = props.dailyTotal.sets;
  return (
    <p>
      Daily Total: {reps * sets + " " + props.dailyTotal.movement}
    </p>
  )


}