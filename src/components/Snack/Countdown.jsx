/**********
THIS COMPONENT WILL DISPLAY THE COUNTDOWN OF THE INTERVAL TIME
NO SOUND AT THIS STAGE - WE WILL HAVE ONE DEFAULT SOUND AS AN ASSET IN THE APP
**********/
import ReactHowler from 'react-howler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";

export default function Countdown(props) {

  const formatTimeLeft = (seconds) => {
    return(`${Math.floor(seconds / 60)}:${
            (seconds % 60 > 9)
              ? seconds % 60
              : '0' + seconds % 60
          }`)
  }

  return (
    <div className='countdown'>
      <h2>
        <FontAwesomeIcon icon={faClock}/>&nbsp;
        {formatTimeLeft(props.timer)}
        {props.timer === 0 && <ReactHowler src="https://actions.google.com/sounds/v1/alarms/bugle_tune.ogg" playing={props.alarmRepeat} />}
      </h2>
    </div>
  )
}
//https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg