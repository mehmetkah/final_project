import "./styles.scss";

export default function DailyTotal(props) {
  
  const reps = props.dailyTotal.reps;
  let sets = props.dailyTotal.sets;
  return (
    <h3 className="totalTracker">
      Daily Total: {reps * sets + " " + props.dailyTotal.movement}
    </h3>
  )


}