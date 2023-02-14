// THIS VIEW WILL DISPLAY THE EXERCISE TALLY FOR THAT DAY AS THE REPS INCREASE AND ONCE THE DAY HAS BEEN COMPLETED - NEED TO WORK ON PULLING DATA BY DAY - NEED TO WORK ON STYLING
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck} from "@fortawesome/free-solid-svg-icons";

export default function MovementComplete(props) {
 
  return (
    <aside className="dailyTotal">
      <FontAwesomeIcon icon={faCircleCheck} />
      <p>&nbsp;{props.dailyMovement.reps * props.dailyMovement.sets + " " + props.dailyMovement.movement}</p>
    </aside>
  )
  
}